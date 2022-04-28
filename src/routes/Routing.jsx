import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from '../components/Form/index';
const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
            <Form/>
        }
      />
    </Routes>
  );
};

export default Routing;