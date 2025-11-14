import React from "react";
import "../assets/styles/IncomeTax.css";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const IncomeTax = () => {
  const navigate = useNavigate();

  return (
    <section className="fu-income-section">
      <div className="container text-center py-5">
        <h5 className="fu-income-subtitle">INCOME TAX</h5>
        <h2 className="fu-income-title">
          Incomes Big or Small, We Serve Them All
        </h2>

        <div className="row mt-5 g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div
              className="fu-income-card h-100 p-4 clickable"
              onClick={() => navigate("/income-tax-notice")}
            >
              <FaUserTie className="fu-income-icon" />
              <h4>Income Tax Notice Response</h4>
              <p>
                The Income Tax Department issues notifications for various
                purposes — including situations where someone hasn't filed
                their returns.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div
              className="fu-income-card h-100 p-4 clickable"
              onClick={() => navigate("/income-tax-notice")}
            >
              <FaUserTie className="fu-income-icon" />
              <h4>TDS Return Filing</h4>
              <p>
                TDS (Tax Deducted at Source) return filing is mandatory for
                individuals or entities that have deducted tax at source.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div
              className="fu-income-card h-100 p-4 clickable"
              onClick={() => navigate("/income-tax-notice")}
            >
              <FaUserTie className="fu-income-icon" />
              <h4>ITR 1 Return Filing</h4>
              <p>
                The Income Tax Department categorizes taxpayers to simplify
                compliance. We help you file under the correct category
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeTax;
