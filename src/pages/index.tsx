import moment from "moment";
import data from "../../public/fakedata.json";
import Link from "next/link";

export default function Home() {
  const date = new Date();

  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar bg-body-tertiary w-100" style={{ height: "80px" }}>
        <div
          className="container-fluid d-flex flex-nowrap w-100 align-items-center justify-content-between gap-3"
          style={{ zIndex: 1 }}
        >
          <Link href={"#"}>
            <div className="navbar-brand">
              <img src="/box.svg" alt="" />
            </div>
          </Link>
          <input
            className="form-control"
            type="text"
            placeholder="Input QR Code number"
          />
          <button className="btn btn-danger">Generate</button>
          <div className="col-3">
            <p className="m-0">{moment(date).format("LLLL")}</p>
            <p className="m-0 fw-bold fs-5">Daily Order</p>
          </div>
        </div>
      </nav>
      <div
        className="d-flex position-fixed"
        style={{ height: "100%", paddingTop: "80px" }}
      >
        <div
          className="d-flex flex-column pt-3 mx-2 mr-3 vh-100 justify-content-between align-items-center gap-3"
          style={{ width: "50px", paddingBottom: "90px" }}
        >
          <div>
            <img src="/menu.svg" alt="" />
            <img src="/sales.svg" alt="" />
          </div>
          <Link href={"/login"}>
            <img src="/logout.svg" alt="" />
          </Link>
        </div>
        <div className="row g-0">
          <div
            className="col-8 d-flex flex-wrap justify-content-center gap-3 p-3 pb-3"
            style={{ overflow: "scroll", height: "100%" }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="card"
                style={{ width: "12rem", height: "18rem" }}
              >
                <div className="h-75">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdk4GqNhjuqEZJ2EC_KK2QUT03m_OJla7RQ&usqp=CAU"
                    className="card-img-top h-100 object-fit-cover"
                    alt="..."
                  />
                </div>
                <div className="h-50 d-flex flex-column p-2">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-title">{item.price}</h6>
                </div>
              </div>
            ))}
          </div>
          <div className="col-4 d-flex flex-column p-3">
            <div
              className=" h-100 d-flex flex-column justify-content-between"
              style={{ height: "100%" }}
            >
              <div>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex w-100 justify-content-between align-items-center"
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <p className="fw-bold fs-5 m-0">{index + 1}.</p>
                      <div>
                        <p className="fw-bold m-0">{item.name}</p>
                        <p className="fw-bold m-0 fs-5">{item.price}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center ">
                      <p className="m-0">QTY</p>
                      <p className="m-0 fw-bold fs-5">2</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <p className="m-0 fw-bold">Total</p>
                  <p className="m-0 fw-bold fs-5">Rp 224.000</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <p className="m-0">QTY</p>
                  <p className="m-0 fw-bold fs-5">20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
