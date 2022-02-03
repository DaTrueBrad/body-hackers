import React from 'react';
import { Route, Routes } from 'react-router';
import RegUserInfo from './RegUserInfo';
import RegUserNiche from './RegUserNiche';

function RegistrationPage() {
  return <div className='page-wrapper'>
    <Routes>
      <Route path="pt1" element={<RegUserInfo />} />
      <Route path="pt2" element={<RegUserNiche />} />
    </Routes>
  </div>;
}

export default RegistrationPage;
