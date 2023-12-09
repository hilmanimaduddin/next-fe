import Link from "next/link";
import React from "react";

export default function Register() {
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
            <h1 className="mb-3">Register</h1>
            <div className="mb-3">
              <label className="form-label fw-bold" htmlFor="name">
                Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold" htmlFor="email">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold" htmlFor="password">
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-danger rounded-pill">Register</button>
              <Link href="/login">
                <p className="text-decoration-none text-danger text-center">
                  Already have an account? Login
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
