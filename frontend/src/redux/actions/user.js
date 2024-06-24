import {
  LOGIN,
  LOGOUT,
  RESETMESSAGE,
  SIGNIN,
  GETUSERS,
  SENDMESSAGE,
  GETUSERMESSAGES,
  DELETEMESSAGE,
  SENDINVITATION,
  ACCEPTINVIT,
  UPDATEPASSWORD,
  DELETEFRIEND,
  EDITPROFILE,
  RESETERROR,
  DELETEACCOUNT,
  SETMESSAGETOVIEWED,
  GETINVITATIONS,
  UPDATEIMAGE
} from "../actions/types";
// login
export const login = (email, password) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
       Accept:"application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
     
      dispatch({
        type: LOGIN,
        payload: response,
      });
    })
    .catch((error) => console.error(error));
};
// logout
export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: LOGOUT,
  });
};
// reset message
export const Reset_message = () => (dispatch) => {
  dispatch({
    type: RESETMESSAGE,
  });
};
// signUp
export const signin = (user) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
    }),
  })
    .then((response) => response.json())
    .then((response) =>
      dispatch({ 
        type: SIGNIN,
        payload: response,
      })
    )
    .catch((error) => console.error(error));
};
// get Users
export const getUsers = (token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:`Bearer ${token}`
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      dispatch({
        type: GETUSERS,
        payload: response,
      });
    });
};
// getInvitations
export const getInvitations = (token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/invitations", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: GETINVITATIONS,
        payload: response,
      });
    });
};
// send Message
export const sendMessage = (data) => async (dispatch) => {

  await fetch("https://lets-talk-backend.vercel.app/addmessage", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${data.token}`
    },
    body: JSON.stringify({
      iduse: data.iduse,
      id_receiver: data.id_receiver,
      message: data.message,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: SENDMESSAGE,
        payload: response,
      });
    });
};
// get User messages
export const getUserMessage = (token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
     Authorization:`Bearer ${token}`
    },
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: GETUSERMESSAGES,
        payload: response,
      });
    });
};
// delete a message
export const deleteMessage = (idmessage,token) => async (dispatch) => {
  await fetch(`https://lets-talk-backend.vercel.app/deletemessage/${idmessage}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: DELETEMESSAGE,
        payload: response,
      });
    });
};
// send invitation
export const sendInvitation = (iduse, idfriend,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/sentinvit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${token}`,
    },
    body: JSON.stringify({
      iduse,
      idfriend,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: SENDINVITATION,
        payload: response,
      });
    });
};
// accept invitation
export const acceptInvit = (iduse, idfriend,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/acceptinvit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${token}`
    },
    body: JSON.stringify({
      idfriend,
      iduse,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: ACCEPTINVIT,
        payload: response,
      });
    });
};
// accept invitation
export const acceptInvit2 = (iduse, idfriend,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/acceptinvit2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${token}`
    },
    body: JSON.stringify({
      idfriend,
      iduse,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
   
      dispatch({
        type: ACCEPTINVIT,
        payload: response,
      });
    });
};
// delete user from friends List

export const deletefriend = (idfriend, iduser,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/removefriend", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      idfriend,
      iduser,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: DELETEFRIEND,
        payload: response,
      });
    });
};
// edit user profile
export const editProfile =
  (iduse, username, email, phone,token) => async (dispatch) => {
    await fetch("https://lets-talk-backend.vercel.app/updateuser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:`Bearer ${token}`
      },
      body: JSON.stringify({
        iduse,
        username,
        email,
        phone,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: EDITPROFILE,
          payload: response,
        });
      });
  };
// update user  password
export const updatePassword =
  (userid, password, lastpassword,token) => async (dispatch) => {
    await fetch("http://localhost:3001/updatepassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userid,
        password,
        lastpassword,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
      console.log(response)
        dispatch({
          type: UPDATEPASSWORD,
          payload: response,
        });
      });
  };
// reset message
export const resetMessage = () => async (dispatch) => {
  dispatch({
    type: RESETMESSAGE,
  });
};
// reset error
export const resetError = () => async (dispatch) => {
  dispatch({
    type: RESETERROR,
  });
};
// delete user account
export const deleteAccount = (password, id,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/deleteuser", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${token}`,
    },
    body: JSON.stringify({
      password,
      id,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: DELETEACCOUNT,
        payload: response,
      });
    });
};
// set  user  message to viewed
export const setMessageToViewed = (iduser1, iduser2,token) => async (dispatch) => {
  await fetch("https://lets-talk-backend.vercel.app/setviewed", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:`Bearer ${token}`
    },
    body: JSON.stringify({
      iduser1,
      iduser2,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: SETMESSAGETOVIEWED,
        payload: response,
      });
    });
};

export const updateImageProfile=(data)=>async(dispatch)=>{
  try{
             dispatch({
              type:UPDATEIMAGE,
              payload:data
             })
  }
  catch(error){
    console.log(error)

  }
}