import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  const router = useRouter();
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(form);
    handleLogin();
  }

  async function handleLogin() {
    try {
      const res = await fetch(
        "https://api.postman.com/collections/3618218-125df5da-043a-4f1f-b3ba-d0085a2bbe0a?access_key=PMAT-01HGW2SP39XF17XHRKZQ88FMAP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      console.log("res", res);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="">
      <div className="row g-0">
        <div className="col-md-6 col-lg-4">
          <div
            className="vh-100 object-fit-cover"
            style={{
              backgroundImage: 'url("/login.svg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4">
              <div className="h-75 d-flex flex-column align-items-center justify-content-between">
                <img src="/kaon.svg" alt="" />
                <p className="text-center text-white p-3">
                  An application that will make your gift sending experience
                  even more memorable
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-8 d-flex align-items-center vh-100">
          <div className="w-75 mx-auto p-4">
            <h1 className="mb-3">Get Started</h1>
            <div className="mb-3">
              <label className="form-label fw-bold" htmlFor="email">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold" htmlFor="password">
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="d-grid">
              <button
                onClick={handleSubmit}
                className="btn btn-danger rounded-pill"
              >
                Login
              </button>
              <Link href="/register">
                <p className="text-decoration-none text-danger text-center">
                  Register Now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
