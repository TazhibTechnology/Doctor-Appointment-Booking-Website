import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(docInfo || null); // اگر پزشک یافت نشود مقدار null قرار می‌گیرد
    }
  }, [doctors, docId]);

  if (!docInfo) {
    return <p>Loading doctor details...</p>;
  }

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div>
          <div>
            <img src={docInfo.image} alt='' />
          </div>
        </div>
        <div>
          {/* Doc info name degree exper */}
          <p>
            {docInfo.name}
            <img src={assets.verified_icon} alt='' />
          </p>
          <div>
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button>{docInfo.experience}</button>
          </div>
          {/* doctor About */}
          <div>
            <p>
              About <img src={assets.info_icon} alt='' />
            </p>
            <p>{docInfo.about}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
