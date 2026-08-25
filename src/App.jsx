import { useState } from "react";
import kitchenRemodel from "./kitchen-remodel.jpg";
import kitchenRemodelWide from "./kitchen-remodel-wide.jpg";
import emailjs from "@emailjs/browser";
  
function App() {
  const [formSent, setFormSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_960o7ic",
        "template_hk0y7k7",
        e.target,
        "nH7DBx1rLfgZzJ9Kp"
      )
      .then(
       () => {
  setFormSent(true);
  e.target.reset();
},
        (error) => {
          console.error("EmailJS error:", error);
          alert(
            "There was a problem sending your request. Please call MV Construction at (760) 880-0774."
          );
        }
      );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2937" }}>
      <header
  className="mobile-header"
  style={{
          padding: "24px 6%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div>
          <div
  className="mobile-header-title"
  style={{ fontSize: 28, fontWeight: 800 }}
>
  MV Construction
</div>
          <div
  className="mobile-header-location"
  style={{ fontSize: 14, color: "#6b7280" }}
>
            Palm Desert, California
          </div>
        </div>

        <a
          className="mobile-header-call"
          href="tel:17608800774"
          style={{
            textDecoration: "none",
            background: "#111827",
            color: "white",
            padding: "14px 20px",
            borderRadius: 8,
            fontWeight: 700,
          }}
        >
          Call (760) 880-0774
        </a>
      </header>

      <main>
        <div
  style={{
    width: "100%",
    height: "520px",
    overflow: "hidden",
  }}
>
  <img
    src={kitchenRemodel}
    alt="Kitchen remodeling project by MV Construction in the Coachella Valley"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
        <section
          style={{
            padding: "90px 6%",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 1.5,
                color: "#b45309",
                marginBottom: 16,
              }}
            >
              PALM DESERT KITCHEN REMODELING
            </div>

           <h1
                className="hero-title"
                style={{
                fontSize: "clamp(44px, 7vw, 78px)",
                lineHeight: 1,
                margin: "0 0 24px",
              }}
            >
              Complete Kitchen Renovations, Professionally Managed
            </h1>

            <p
              style={{
                fontSize: 22,
                lineHeight: 1.6,
                color: "#4b5563",
                marginBottom: 32,
              }}
            >
              MV Construction manages complete kitchen remodels from demolition
              and construction through cabinetry, countertops, lighting,
              flooring, appliances, and final finishes.
            </p>

            <div
                className="hero-buttons"
                style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 24,
              }}
            >
              <a
                className="hero-button"
                href="#consultation"
                style={{
                  textDecoration: "none",
                  background: "#d97706",
                  color: "white",
                  padding: "16px 24px",
                  borderRadius: 8,
                  fontWeight: 800,
                }}
              >
                Request a Remodel Consultation
              </a>

              <a
                className="hero-button"
                href="tel:17608800774"
                style={{
                  textDecoration: "none",
                  border: "2px solid #111827",
                  color: "#111827",
                  padding: "14px 22px",
                  borderRadius: 8,
                  fontWeight: 800,
                }}
              >
                Call Now
              </a>
            </div>

            <p style={{ color: "#6b7280", fontSize: 16 }}>
              Serving Palm Desert, Rancho Mirage, Indian Wells, and La Quinta.
            </p>
          </div>
        </section>

        <section
        className="methodical-section"
          style={{
            background: "#f9fafb",
            padding: "70px 6%",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
        className="methodical-title"
          style={{ fontSize: 38, marginBottom: 20 }}
>
  A More Methodical Approach to Remodeling
</h2>

            <p
              style={{
                maxWidth: 800,
                fontSize: 20,
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              A successful remodel depends on planning, communication,
              coordination, and attention to detail. MV Construction provides
              one point of contact for the project and manages the trades,
              scheduling, and construction process from start to finish.
            </p>
          </div>
        </section>
            <section
      style={{
        padding: "80px 6% 45px", 
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#c75b00",
            fontWeight: 800,
            letterSpacing: 2,
            fontSize: 14,
            marginBottom: 12,
          }}
        >
          COMPLETE KITCHEN REMODELING
        </p>

        <h2
          style={{
            fontSize: 42,
            marginTop: 0,
            marginBottom: 20,
            color: "#1f2937",
          }}
        >
          One Contractor. Your Entire Kitchen Remodel.
        </h2>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.7,
            color: "#4b5563",
            maxWidth: 850,
            marginBottom: 40,
          }}
        >
          MV Construction coordinates your kitchen renovation from demolition
          through the final finishes, giving you one point of contact throughout
          the project.
        </p>

        <div className="services-grid">
          {[
            "Demolition & Preparation",
            "Electrical & Lighting",
            "Plumbing",
            "Cabinet Installation",
            "Countertops & Backsplashes",
            "Flooring & Finish Work",
          ].map((service) => (
            <div
              key={service}
              style={{
                padding: "24px",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                fontSize: 18,
                fontWeight: 700,
                color: "#1f2937",
              }}
            >
              ✓ {service}
            </div>
          ))}
        </div>
      </div>
    </section>
    <section
  style={{
    width: "100%",
    marginTop: 0,
  }}
>
  <img
    src={kitchenRemodelWide}
    alt="Kitchen remodeling project by MV Construction in the Coachella Valley"
    style={{
      width: "100%",
      height: "520px",
      objectFit: "cover",
      display: "block",
    }}
  />
</section>

       <section
  id="consultation"
  style={{
    background: "#111827",
    color: "white",
    padding: "80px 6%",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 40,
      flexWrap: "wrap",
    }}
  >
    <div style={{ maxWidth: 700 }}>
      <p
        style={{
          color: "#f59e0b",
          fontWeight: 800,
          letterSpacing: 2,
          fontSize: 14,
          marginBottom: 12,
        }}
      >
        START YOUR REMODEL
      </p>

      <h2
        style={{
          fontSize: 42,
          margin: "0 0 18px",
        }}
      >
        Planning a Kitchen Remodel?
      </h2>

      <p
        style={{
          fontSize: 20,
          lineHeight: 1.7,
          color: "#d1d5db",
          margin: 0,
        }}
      >
        Talk directly with MV Construction about your project, budget,
        timeline, and the best way to move forward.
      </p>
    </div>

    <div
      style={{
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
      }}
    >
      <a
        href="tel:17608800774"
        style={{
          textDecoration: "none",
          background: "#d97706",
          color: "white",
          padding: "16px 24px",
          borderRadius: 8,
          fontWeight: 800,
        }}
      >
        Call (760) 880-0774
      </a>

      <a
        href="#contact-form"
        style={{
          textDecoration: "none",
          border: "2px solid white",
          color: "white",
          padding: "14px 22px",
          borderRadius: 8,
          fontWeight: 800,
        }}
      >
        Request a Consultation
      </a>
    </div>
  </div>
</section>
<section
  id="contact-form"
  style={{
    padding: "80px 6%",
    background: "#f9fafb",
  }}
>
  <div
    style={{
      maxWidth: 900,
      margin: "0 auto",
    }}
  >
    <p
      style={{
        color: "#c75b00",
        fontWeight: 800,
        letterSpacing: 2,
        fontSize: 14,
        marginBottom: 12,
      }}
    >
      REQUEST A CONSULTATION
    </p>

    <h2
      style={{
        fontSize: 42,
        marginTop: 0,
        marginBottom: 16,
        color: "#1f2937",
      }}
    >
      Tell Us About Your Kitchen Remodel
    </h2>

    <p
      style={{
        fontSize: 19,
        lineHeight: 1.7,
        color: "#4b5563",
        marginBottom: 32,
      }}
    >
      Share a few details about your project and MV Construction will contact
      you to discuss the next steps.
    </p>

   <form
   onSubmit={sendEmail}
  style={{
        display: "grid",
        gap: 18,
      }}
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        required
        style={{
          padding: 16,
          borderRadius: 8,
          border: "1px solid #d1d5db",
        }}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        
        required
        style={{
          padding: 16,
          borderRadius: 8,
          border: "1px solid #d1d5db",
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        style={{
          padding: 16,
          borderRadius: 8,
          border: "1px solid #d1d5db",
        }}
      />

      <input
        type="text"
        name="city"
        placeholder="Project City"
        style={{
          padding: 16,
          borderRadius: 8,
          border: "1px solid #d1d5db",
        }}
      />
      <select
  name="budget"
  required
  defaultValue=""
  style={{
    padding: 16,
    borderRadius: 8,
    border: "1px solid #d1d5db",
    background: "white",
    color: "#4b5563",
  }}
>
  <option value="" disabled>
    Estimated Project Budget
  </option>
  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
  <option value="$50,000 - $75,000">$50,000 - $75,000</option>
  <option value="$75,000 - $100,000">$75,000 - $100,000</option>
  <option value="$100,000+">$100,000+</option>
  <option value="Not sure yet">Not sure yet</option>
</select>

      <textarea
        name="message"
        placeholder="Tell us about your remodel"
        rows="5"
        required
        style={{
          padding: 16,
          borderRadius: 8,
          border: "1px solid #d1d5db",
          resize: "vertical",
        }}
      />

      <button
        type="submit"
        style={{
          background: "#d97706",
          color: "white",
          border: "none",
          padding: "16px 24px",
          borderRadius: 8,
          fontWeight: 800,
          cursor: "pointer",
        }}
      >
        Request My Consultation
      </button>
      {formSent && (
  <div
    style={{
      background: "#ecfdf5",
      border: "1px solid #10b981",
      borderRadius: 8,
      padding: "18px 20px",
      color: "#065f46",
      fontWeight: 700,
      lineHeight: 1.5,
    }}
  >
    Thank you! Your consultation request has been received.
    MV Construction will contact you shortly.
  </div>
)}
    </form>
  </div>
</section>
      </main>
    </div>
  )
}

export default App