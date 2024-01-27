import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

import './ResultScreen.css';

const ResultScreen = () => {

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        {/* Left Section (70%) */}
        <div className="col-md-8 p-0 bg-search">
          <div className="card h-100">
            <div className="card-body">
              {/* Title */}
              <h4 className="card-title text-main font-impact">Result for the search "People of world"</h4>

              {/* Sources */}
              <div>
                <h5 className="card-subtitle mb-2 mt-4">Sources:</h5>
                <div class="card w-50 h-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
                {/* Add more source cards as needed */}
              </div>

              {/* Answer Details */}
              <div className="mt-4">
                <h5 className="card-subtitle mb-2">Answer Details:</h5>
                <ul>
                  <li>Detail 1</li>
                  <li>Detail 2</li>
                  {/* Add more details as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (30%) */}
        <div className="col-md-4 p-0 bg-search">
          <div className="card h-100">
            <div className="card-body">
              {/* Content for the right section goes here */}
              <h5 className="card-title text-main font-impact">Right Section</h5>
              <p className="card-text">Content goes here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
