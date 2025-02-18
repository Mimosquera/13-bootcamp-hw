import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import type { Candidate } from "../interfaces/Candidate.interface";
import Card from "../components/Card";

interface Users {
  login: string;
}

const CandidateSearch = () => {
  const [users, setUsers] = useState<Users[]>([]);
  //Details to display for each candidate
  const [currentUser, setCurrentUser] = useState<Candidate>({
    avatar_url: "",
    login: "",
    location: null,
    email: null,
    company: null,
    bio: null,
    html_url: "",
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
//setting up retrieval of github api information and 
  const getAllUsers = async () => {
    const userData = await searchGithub();
    setUsers(userData);
  };
  
  const getUser = async () => {
    if (!users[currentIndex]?.login) return;
    const userData = await searchGithubUser(users[currentIndex].login);
    console.log(userData);
    setCurrentUser(userData);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    
    if (users.length === 0) return;
    getUser();
  }, [users, currentIndex]);

  useEffect(() => {
    console.log("currentUser:", currentUser);
  }, [currentUser]);

  const handleAddUser = () => {
    setCurrentIndex(currentIndex + 1);
    //access to already saved users in local storage
    let localStorageUsers: any = localStorage.getItem("users");
    if (localStorageUsers) {
      localStorageUsers = JSON.parse(localStorageUsers);
    } else {
      localStorageUsers = [];
    }

    localStorageUsers.push(currentUser);
    localStorage.setItem("users", JSON.stringify(localStorageUsers));
  };
  //allows user to move past a canidate without saving them to local storage
  const handlePassUser = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bold",
          padding: "10px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        Candidate Search
      </h1>
      {users[currentIndex] ? (
        <>
          <Card user={currentUser} />
          <div className="button-container">
            <button className="add-user" onClick={handleAddUser}>+</button>
            <button className="pass-user" onClick={() => handlePassUser()}>-</button>
          </div>
        </>
      ) : (
        //displays when there are no more candidates available to choose from 
        <div>No more Candidates Available</div>
      )}
    </div>
  );
};

export default CandidateSearch;
