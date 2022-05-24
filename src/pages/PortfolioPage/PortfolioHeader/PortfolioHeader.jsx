import React, { useEffect, useState } from "react";
import IconButton from "../../../components/IconButton/IconButton";
import "./PortfolioHeader.scss";
import EditHeaderForm from "./EditHeaderForm";
import { getStorage, ref, getDownloadURL  } from "firebase/storage";
import { storage } from "../../../config/FirebaseConfig";

const PortfolioHeader = () => {
  const [isOpenEditHeaderForm, setIsOpenEditHeaderForm] = useState(false);
  const [colorActive, setColorActive] = useState("rgb(103, 199, 113)");
  const [rootedColorActive, setRootedColorActive] = useState("rgb(103, 199, 113)");
  const [bgImgInfo, setBgImgInfo] = useState({
    imgUrl: "",
    detail: "",
    imgName: "",
  });
  // console.log("bgImgInfo", bgImgInfo);
  

  useEffect(() => {
    if (!isOpenEditHeaderForm) {

      const headerBgImgName = (localStorage.getItem("headerBgImgName"));
  
      const imgRef = ref(storage, `/imgs/${headerBgImgName}`);
  
    // Get the download URL
    getDownloadURL(imgRef)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        console.log("url", url);
        const httpsReference = ref(storage, url);
    
        setBgImgInfo({
          ...bgImgInfo,
          imgUrl: url,
          imgName: headerBgImgName,
        })
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
    
          // ...
    
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
      }

  }, [isOpenEditHeaderForm])


  const headerBgColorSave = () => {
    setRootedColorActive(colorActive);
  }

  const headerBgCancel = () => {
    setColorActive(rootedColorActive);
  }

  return (
    <div className="portfolio-header">
      {isOpenEditHeaderForm && (
        <EditHeaderForm
          colorActive={colorActive}
          handleSetActiveColor={(selectedColor) =>
            setColorActive(selectedColor)
          }
          handleCloseForm={() => setIsOpenEditHeaderForm(false)}
          headerBgCancel={headerBgCancel}
          headerBgColorSave={headerBgColorSave}
          bgImgInfo={bgImgInfo}
          setBgImgInfo={setBgImgInfo}
        />
      )}
      <div
        className="portfolio-banner"
        // style={{backgroundImage: "url('https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=')", backgroundColor: `${colorActive}`}}
        style={{
          backgroundImage: `url(${bgImgInfo.imgUrl})`,
          backgroundColor: `${colorActive}`,
        }}
      >
        <div className="relative container h-100">
          <IconButton
            svgIcon={
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="camera"
                className="svg-inline--fa fa-camera fa-w-16 mr-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                color="#fff"
              >
                <path
                  fill="currentColor"
                  d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
                ></path>
              </svg>
            }
            addedClass="edit-header-portfolio"
            handleClick={() => setIsOpenEditHeaderForm(true)}
          >
            Edit header
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
