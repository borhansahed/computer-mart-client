import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L3zoGFafvgGReSn3aLTGokOiyJbR238rTsIZooarrxscgPn22x4Dkinedgg3OeAXmN34nZ2CDlOOXaWpockDS26007gj6u3x1"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://computer-mart2.onrender.com/booking/${id}`;

  const {
    data: booking,
    isLoading,
    refetch,
  } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  refetch();

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className=""> </h3>

      <div className="card w-96 bg-base-100 ">
        <div className="card-body">
          <h2 className=" text-xl text-yellow-500">
            Hello Dear{" "}
            {booking?.customerName ? (
              booking.customerName
            ) : (
              <span className="">Customer</span>
            )}{" "}
            ,
          </h2>
          {!booking.paid ? (
            <h2 className=" text-2xl font-bold">
              Please pay for <span className="">{booking.product}</span>{" "}
            </h2>
          ) : (
            <p className="text-2xl">Congratulations</p>
          )}
          {!booking.paid ? (
            <h2 className=" text-xl ">
              Your <span className="text-2xl">{booking.quantity}</span>{" "}
              <span className="text-yellow-500">{booking.product}</span> is
              waiting for you
            </h2>
          ) : (
            <h2 className=" text-xl ">
              Your <span className="text-2xl">{booking.quantity}</span>{" "}
              <span className="text-yellow-500">{booking.product}</span> is
              going under shipping
            </h2>
          )}
          {!booking.paid ? (
            <p className="text-2xl font-bold">Pay $ {booking.price}</p>
          ) : (
            <p className="text-xl font-medium text-yellow-500">
              Payment Successful
            </p>
          )}
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mt-12">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              key={booking._id}
              booking={booking}
              isLoading={isLoading}
              refetch={refetch}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
