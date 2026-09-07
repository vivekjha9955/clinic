// import React from "react";
// import "./Footer.css";
// import {
//   CONTACT_INFO,
//   FOOTER_COMPANY_LINKS,
  
// } from "../../data/constants";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer__grid">
//           {/* Brand */}
//           <div className="footer__brand">
//             <div className="footer__logo">
//               Indian Speech and Hearing<span> Clinic</span>
//             </div>
//             <div className="footer__unit">Trustable Enterprise</div>
//             <p>
//   Our mission is to enhance lives through exceptional hearing care, delivering personalized, comprehensive, and compassionate services in a warm and supportive environment.
// </p>
//             <div className="footer__contacts">
//               <a href={`mailto:${CONTACT_INFO.email}`}>
//                 <i className="fas fa-envelope"></i>
//                 {CONTACT_INFO.email}
//               </a>
//               <a href={`tel:${CONTACT_INFO.phone1}`}>
//                 <i className="fas fa-phone"></i>
//                 {CONTACT_INFO.phone1}
//               </a>
//               <a
//                 href={CONTACT_INFO.mapUrl}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <i className="fas fa-location-dot"></i>
//                 14,1st Floor, Arctic Mall, Opp.Old Army School, Near Dr. H.p Narayan , Bariatu Road, Ranchi -834009 Jharkhand
//               </a>
//             </div>
//           </div>

//           {/* Company Links */}
//           <div className="footer__col">
//             <h4>Company</h4>
//             <ul>
//               {FOOTER_COMPANY_LINKS.map((link) => (
//                 <li key={link.label}>
//                   <a href={link.href}>{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services Links
//           <div className="footer__col">
//             <h4>Services</h4>
//             <ul>
//               {FOOTER_SERVICE_LINKS.map((link) => (
//                 <li key={link.label}>
//                   <a href={link.href}>{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Locations */}
//           <div className="footer__col footer__col--locations">
//             <h4>Our Location</h4>
//             {CONTACT_INFO.locations.map((loc) => (
//               <div className="footer__location" key={loc.id}>
//                 <i className="fas fa-location-dot"></i>
//                 <div>
//                   <strong>{loc.label}</strong>
//                   <p>{loc.address}</p>
//                   <a
//                     href={loc.mapUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="footer__map-link"
//                   >
//                     <i className="fas fa-map"></i> View on Google Maps
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="footer__bottom">
//         <div className="container">
//           © {new Date().getFullYear()} Indian Speech &amp; Hearing Clinic. All Rights Reserved. |
//           Designed with ❤️ 
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";
import {
  CONTACT_INFO,
  FOOTER_COMPANY_LINKS,
  FOOTER_HEARING_AIDS_LINKS,
  FOOTER_HEARING_LOSS_LINKS,
} from "../../data/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo footer__logo--mark">ISHC</div>
            <div className="footer__unit">Trustable Enterprise</div>
            <p>
  Our mission is to enhance lives through exceptional hearing care, delivering personalized, comprehensive, and compassionate services in a warm and supportive environment.
</p>
            <div className="footer__contacts">
              <a href={`mailto:${CONTACT_INFO.email}`}>
                <i className="fas fa-envelope"></i>
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone1}`}>
                <i className="fas fa-phone"></i>
                {CONTACT_INFO.phone1}
              </a>
              <a
                href={CONTACT_INFO.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-location-dot"></i>
                14,1st Floor, Arctic Mall, Opp.Old Army School, Near Dr. H.p Narayan , Bariatu Road, Ranchi -834009 Jharkhand
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hearing Aids Links */}
          <div className="footer__col">
            <h4>Hearing Aids</h4>
            <ul>
              {FOOTER_HEARING_AIDS_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hearing Loss (plain text, no links) */}
          <div className="footer__col">
            <h4>Hearing Loss</h4>
            <ul className="footer__col--plain">
              {FOOTER_HEARING_LOSS_LINKS.map((link) => (
                <li key={link.label}>{link.label}</li>
              ))}
            </ul>
          </div>

          {/* Services Links
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Locations */}
          <div className="footer__col footer__col--locations">
            <h4>Our Location</h4>
            {CONTACT_INFO.locations.map((loc) => (
              <div className="footer__location" key={loc.id}>
                <i className="fas fa-location-dot"></i>
                <div>
                  <strong>{loc.label}</strong>
                  <p>{loc.address}</p>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="footer__map-link"
                  >
                    <i className="fas fa-map"></i> View on Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {new Date().getFullYear()} Indian Speech &amp; Hearing Clinic. All Rights Reserved. |
          Designed with ❤️ 
        </div>
      </div>
    </footer>
  );
};

export default Footer;