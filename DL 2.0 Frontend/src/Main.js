import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DiamondtoolSetting from "./components/diamondtoolsettings/DiamondtoolSetting";
import DiamondSettingDetails from "./components/diamondsettings-details/DiamondSettingDetails";
import Skeleton from "react-loading-skeleton";
import NotFound from "./components/NotFound";
import { Modal } from "react-responsive-modal"; // Importing Modal from react-responsive-modal
import "react-responsive-modal/styles.css"; // Import the default styles

const Main = () => {
  const [skeltonLoad, setSkeltonLoad] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { pathname } = useLocation();

  const getInitTool = async (storename) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shop_domain: storename }),
    };

    try {
      const res = await fetch(
        `${process.env.REACT_APP_URL}/initToolApi`,
        requestOptions
      );
      const initData = await res.json();
      window.initData = initData;
      window.currency = window.initData["data"][0].currency;
      window.currencyFrom = window.initData["data"][0].currencyFrom;
      window.compareproduct = [];
      window.compareProductDiamondType = [];
      window.dealerid = window.initData["data"][0].dealerid;

      window.miniprice = 0;
      window.serverurl = window.initData.data[0].server_url;
      window.maxprice = 0;
      window.spinloader = "true";
      setSkeltonLoad(true);
      if (window.initData["data"][0].show_powered_by === "1") {
        document.getElementById(
          "gemfind_diamondtool_powered_by"
        ).style.display = "block";
      }

      // Check if dealerid is empty and show popup if true
      if (!window.dealerid) {
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Append the div to the body of the page
    document.body.classList.add("gf_dl_tool");
    if (window.location.href.indexOf("localhost") > -1) {
      getInitTool("gemfind-app-store.myshopify.com");
    } else {
      getInitTool(document.getElementById("shop_domain").value);
    }
  }, []);

  return (
    <>
      {showPopup && (
        <Modal open={showPopup} onClose={() => setShowPopup(false)} center>
          <div className="gf_activationPopup_block">
            <img
              className="gf_alert_img"
              src={
                window.initData.data[0].server_url +
                process.env.PUBLIC_URL +
                "/images/alertImg.png"
              }
              alt="alertImg"
            ></img>
            <h2 className="gf_activationPopup_heading">Activation Required</h2>
            <p className="gf_activationPopup_desc">
              Please activate payment & subscribe to use the application.{" "}
            </p>
          </div>
        </Modal>
      )}

      {skeltonLoad ? (
        <Routes basename={"/diamondtools"}>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/*`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/diamonds`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/diamondtype/navlabgrown`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/diamondtype/navfancycolored`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/navlabgrown`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/compare`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/navfancycolored`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/product/*`}
            element={<DiamondSettingDetails />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/product/*/*`}
            element={<DiamondSettingDetails />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path={`${process.env.PUBLIC_URL}/shape/:shape`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/diamondtype/navlabgrown/shape/:shape`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/navlabgrown/shape/:shape`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/diamondtype/navfancycolored/shape/:shape`}
            element={<DiamondtoolSetting />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/navfancycolored/shape/:shape`}
            element={<DiamondtoolSetting />}
          />
        </Routes>
      ) : (
        <div className="gf-tool-container">
          <Skeleton height={80} />
          <Skeleton />
          <div className="Skeleton-type">
            <Skeleton count={9} height={60} />
          </div>
          <div className="Skeleton-settings">
            <div className="skeleton-div">
              <div className="skelton-info">
                <div className="div-right">
                  <Skeleton count={8} height={60} />
                </div>
              </div>
            </div>
            <div className="skeleton-div">
              <div className="skelton-info">
                <div className="div-right-price">
                  <Skeleton height={60} />
                </div>
                <div className="div-right-metal">
                  <Skeleton height={60} />
                </div>
              </div>
            </div>
          </div>
          <div className="s_gridview">
            <div className="Skeleton__lists">
              <Skeleton circle={true} height={150} width={150} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
            </div>
            <div className="Skeleton__lists">
              <Skeleton circle={true} height={150} width={150} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
            </div>
            <div className="Skeleton__lists">
              <Skeleton circle={true} height={150} width={150} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
            </div>
            <div className="Skeleton__lists">
              <Skeleton circle={true} height={150} width={150} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
            </div>
            <div className="Skeleton__lists">
              <Skeleton circle={true} height={150} width={150} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
            </div>
            <div className="Skeleton__lists">
              <Skeleton circle={true} height={150} width={150} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
            </div>
            <div className="Skeleton__lists">
              <Skeleton circle={true} height={150} width={150} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
            </div>
            <div className="Skeleton__lists">
              <Skeleton circle={true} height={150} width={150} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
              <Skeleton height={25} width={200} />
            </div>
          </div>
          <Skeleton />
        </div>
      )}
    </>
  );
};

export default Main;
