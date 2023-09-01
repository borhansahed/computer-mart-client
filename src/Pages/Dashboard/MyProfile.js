import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import auth from "../../Firebase-init";
import Loading from "../../Shared/Loading";

const MyProfile = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }

  const handleProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const linkdin = event.target.linkurl.value;
    const about = event.target.about.value;
    const picture = event.target.url.value;
    console.log(name, address, linkdin, about);

    const profile = {
      email: user.email,
      name,
      about,
      linkdin,
      picture,
      address,
    };
    fetch(`https://computer-mart2.onrender.com/profile/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Update your profile");
      });

    navigate("/dashboard");
  };

  return (
    <div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <form
              onSubmit={handleProfile}
              className=" mx-auto w-60  lg:mx-0 lg:w-2/4"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base lg:text-xl">Name</span>
                </label>
                <input
                  className="input input-bordered text-base"
                  type="text"
                  placeholder="name"
                  {...register("name", {
                    required: true,
                    minLength: 3,
                    maxLength: 10,
                  })}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base lg:text-xl">
                    Address
                  </span>
                </label>
                <input
                  className="input input-bordered text-base"
                  type="text"
                  placeholder="address"
                  {...register("address", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                  })}
                  required
                />
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-base lg:text-xl">
                    Your Photo
                  </span>
                </label>
                <input
                  className="input input-bordered text-base"
                  type="url"
                  placeholder="your photo url"
                  {...register("url", { required: true, maxLength: 40 })}
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-base lg:text-xl">
                    Linkdin Profile
                  </span>
                </label>
                <input
                  className="input input-bordered text-base"
                  type="url"
                  placeholder="linkdin profile url"
                  {...register("linkurl", { required: true, maxLength: 40 })}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base lg:text-xl">
                    About you
                  </span>
                </label>
                <input
                  className="input input-bordered text-base"
                  type="text"
                  placeholder="tell about yourself "
                  {...register("about", {
                    required: true,
                    minLength: 1,
                    maxLength: 100,
                  })}
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn text-white btn-warning text-base lg:text-lg font-medium"
                  type="submit"
                  value="Update Your profile"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
