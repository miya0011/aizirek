import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function FooterCustom() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ marginTop: "400px", backgroundColor: "#1E434c" }}
    >
      <MDBContainer className="p-4 pb-0" style={{ backgroundColor: "#1E434c" }}>
        <section className="mb-4" style={{ backgroundColor: "#1E434c" }}>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.facebook.com/marketplace/profile/100074437391542/?ref=permalink&mibextid=dXMIcH"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://instagram.com/kyok01_?igshid=ZmZhODViOGI="
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/miya0011/mia"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "#1E434c" }}>
        © 2020 Copyright: Mango Books
      </div>
    </MDBFooter>
  );
}
