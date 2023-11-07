import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthMe, fetchAllUsers, fetchAdminStatistic } from "../store/auth";
import { AUTH_TOKEN } from "../utils/Token";
const FirstRequest = ({ user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (AUTH_TOKEN) {
      dispatch(fetchAuthMe());
    }
  }, []);

  useEffect(() => {
    if (user?.isAdmin) {
      dispatch(fetchAllUsers());
    }
  }, [user]);

  useEffect(() => {
    if (AUTH_TOKEN) {
      dispatch(fetchAdminStatistic());
    }
  }, []);
};

export default FirstRequest;
