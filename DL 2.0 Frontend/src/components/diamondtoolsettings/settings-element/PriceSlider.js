import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import Skeleton from "react-loading-skeleton";
import { useCookies } from "react-cookie";

const PriceSlider = (props) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [loaded, setLoaded] = useState(false);
  const marks = props.pricerangeData;
  const [startValue, setStartValue] = useState(Number(props.pricemindata));
  const [lastValue, setLastValue] = useState(Number(props.pricemaxdata));
  const [loadedfirst, setloadedfirst] = useState(false);

  const [getsettingcookies, setsettingcookies] = useCookies([
    "_wpsavediamondfiltercookie",
  ]);
  const [getlabcookies, setlabcookies] = useCookies([
    "_wpsavedlabgowndiamondfiltercookie",
  ]);
  const [getfancycookies, setfancycookies] = useCookies([
    "_wpsavedfancydiamondfiltercookie",
  ]);

  const rangeSelector = (newValue) => {
    setStartValue(parseFloat(newValue[0]).toFixed(2));
    setLastValue(parseFloat(newValue[1]).toFixed(2));

    let sliderSelection = [];
    sliderSelection.push(parseFloat(newValue[0]).toFixed(2));
    sliderSelection.push(parseFloat(newValue[1]).toFixed(2));
  };

  const rangeSelectorprops = (newValue) => {
    setStartValue(parseFloat(newValue[0]).toFixed(2));
    setLastValue(parseFloat(newValue[1]).toFixed(2));

    let sliderSelection = [];
    sliderSelection.push(parseFloat(newValue[0]).toFixed(2));
    sliderSelection.push(parseFloat(newValue[1]).toFixed(2));
    props.callBack(sliderSelection);
  };

  const startValueOnChange = (event) => {
    const intValue = parseFloat(event.target.value);
    if (
      !isNaN(intValue) &&
      intValue >= 0 &&
      intValue <= Number(marks[0].maxPrice)
    ) {
      setStartValue(intValue.toFixed(2));
      let sliderSelection = [];
      sliderSelection.push(intValue.toFixed(2));
      sliderSelection.push(lastValue);
      props.callBack(sliderSelection);
    } else {
      alert("Please Enter Valid Value");
      return;
    }
  };

  const endValueOnChange = (event) => {
    const intValue = parseFloat(event.target.value);
    if (
      !isNaN(intValue) &&
      intValue >= 0 &&
      intValue <= Number(marks[0].maxPrice)
    ) {
      setLastValue(intValue.toFixed(2));
      let sliderSelection = [];
      sliderSelection.push(startValue);
      sliderSelection.push(intValue.toFixed(2));
      props.callBack(sliderSelection);
    } else {
      alert("Please Enter Valid Value");
      return;
    }
  };

  useEffect(() => {
    setLoaded(true);
    if (props.callbacktab === "fancycolor") {
      if (
        getfancycookies._wpsavedfancydiamondfiltercookie &&
        getfancycookies._wpsavedfancydiamondfiltercookie.pricemin &&
        getfancycookies._wpsavedfancydiamondfiltercookie.pricemax
      ) {
        setStartValue(Number(props.pricemindata).toFixed(2));
        setLastValue(Number(props.pricemaxdata).toFixed(2));
      }
    }

    if (props.pricemindata === "" && props.pricemaxdata === "") {
      setStartValue(Number(marks[0].minPrice).toFixed(2));
      setLastValue(Number(marks[0].maxPrice).toFixed(2));
    }

    if (props.callbacktab === "mined") {
      if (
        getsettingcookies._wpsavediamondfiltercookie &&
        getsettingcookies._wpsavediamondfiltercookie.pricemin &&
        getsettingcookies._wpsavediamondfiltercookie.pricemax
      ) {
        setStartValue(Number(props.pricemindata).toFixed(2));
        setLastValue(Number(props.pricemaxdata).toFixed(2));
      }
    }
    if (props.callbacktab === "labgrown") {
      if (
        getlabcookies._wpsavedlabgowndiamondfiltercookie &&
        getlabcookies._wpsavedlabgowndiamondfiltercookie.pricemin &&
        getlabcookies._wpsavedlabgowndiamondfiltercookie.pricemax
      ) {
        setStartValue(Number(props.pricemindata).toFixed(2));
        setLastValue(Number(props.pricemaxdata).toFixed(2));
      }
    }
  }, [props]);

  if (loaded === false) {
    return <Skeleton height={80} />;
  } else {
    return (
      <div className="range-slider_diamond">
        <div className="slider">
          <h4 className="f_heading">
            Price
            <span className="f_popup" onClick={onOpenModal}>
              <i className="fas fa-info-circle"></i>
            </span>
          </h4>
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            classNames={{
              overlay: "popup_Overlay",
              modal: "popup_Modal",
            }}
          >
            <div className="popup_content">
              <p>
                This refers to different types of Price to filter and select the
                appropriate ring as per your requirements. Look for the best
                suit price of your chosen ring.
              </p>
            </div>
          </Modal>
          <div className="diamond-ui-slider diamond-small-slider">
            <Nouislider
              connect
              behaviour={"snap"}
              start={[
                props.pricemindata
                  ? parseFloat(props.pricemindata).toFixed(2)
                  : startValue,
                props.pricemaxdata
                  ? parseFloat(props.pricemaxdata).toFixed(2)
                  : lastValue,
              ]}
              range={{
                min: Number(marks[0].minPrice),
                max: Number(marks[0].maxPrice),
              }}
              tooltips={true}
              onChange={rangeSelectorprops}
            />
          </div>
        </div>
        <div className="input-value">
          <div className="input-value-left">
            <span
              className={
                window.initData["data"][0].price_row_format === "0"
                  ? "icon-right"
                  : "icon-left"
              }
            >
              {window.currencyFrom === "USD"
                ? window.currency
                : window.currencyFrom + " " + window.currency}
            </span>
            <input
              type="text"
              value={props.pricemindata ? props.pricemindata : startValue}
              onChange={startValueOnChange}
              className={
                window.initData["data"][0].price_row_format === "0"
                  ? "input-left"
                  : ""
              }
            />
          </div>
          <div className="input-value-right">
            <span
              className={
                window.initData["data"][0].price_row_format === "0"
                  ? "icon-right"
                  : "icon-left"
              }
            >
              {window.currencyFrom === "USD"
                ? window.currency
                : window.currencyFrom + " " + window.currency}
            </span>
            <input
              type="text"
              value={props.pricemaxdata ? props.pricemaxdata : lastValue}
              onChange={endValueOnChange}
              className={
                window.initData["data"][0].price_row_format === "0"
                  ? "input-left"
                  : ""
              }
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PriceSlider;
