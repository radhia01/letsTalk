import {
  GETGROUPS,
  ADDGROUP,
  JOINGROUP,
  LEAVEGROUP,
  ADDMESSAGETOGROUP,
  GETGROUPSMESSAGES,
} from "../actions/types";
// get groups
export const getGroups = (token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/groups", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:`Bearer ${token}`
    },
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: GETGROUPS,
        payload: response,
      });
    });
};
// add group
export const addGroup = (groupname,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/addgroup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${token}`
    },
    body: JSON.stringify({
      groupname,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: ADDGROUP,
        payload: response,
      });
    });
};
// join group
export const joinGroup = (iduse, idgroup,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/joingroup", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${token}`,
    },
    body: JSON.stringify({
      iduse,
      idgroup,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: JOINGROUP,
        payload: response,
      });
    });
};
// leave a group
export const leaveGroup = (iduse, idgroup,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/leavegroup", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
       Authorization:`Bearer ${token}`
    },
    body: JSON.stringify({
      iduse,
      idgroup,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: LEAVEGROUP,
        payload: response,
      });
    });
};
// get group's messages
export const getGroupsMessages = (token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/groupsmsg", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Baerer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: GETGROUPSMESSAGES,
        payload: response,
      });
    });
};
// send message to a group
export const addMessageToGroup = (data) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/addmsgroup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${data.token}`,
    },
    body: JSON.stringify({
      iduse: data.iduse,
      idgroup: data.idgroup,
      message: data.message,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: ADDMESSAGETOGROUP,
        payload: response,
      });
    });
};
