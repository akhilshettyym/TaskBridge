import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';

import AllTask from "../components/Others/AllTask";
import CreateTask from "../components/Others/CreateTask";
import Header from "../components/Others/Header";

import TaskListNo from "../components/Others/TaskListNo";
import TaskList from "../components/TaskList/TaskList";


import { AuthContext } from "../context/AuthProvider";
import PriorityTag from "../components/Basics/PriorityTag";
import TaskCount from "../components/Basics/TaskCount";


import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";
import AdminDashboard from "../components/Dashboard/AdminDashboard";

import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// STYLES
import {
    signinBtn, signinForm, signinFormDiv, signinHeaderDiv, signinHeaderH1, signinHeaderP, signinInputClass, signinLabelClass, signinMainDiv, signinSignUp, signinSignUpLink, signinWFull, adminDivClass, signupAlreadyRegistered, signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupDescDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupLinkToSignIn, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgInfo, signupOrgLeftRight, signupTextareaClass, employeeDivClass,

    allTaskChildDiv, allTaskChildInnerDiv, allTaskChildH2, allTaskMainDiv, allTaskMainH1, allTaskChildInnerH2, allTaskTasksDiv, allTaskDivSpan, allTaskDivDiv,

    headerChildDiv, headerClassBtn, headerClassH1, headerClassSpan, headerLoadingDiv, headerMainDiv,

    taskListNoChildDiv, taskListNoH2, taskListNoH3, taskListNoMainDiv, taskListNoTaskDiv,

    createTaskBtn, createTaskBtnDiv, createTaskChildDiv, createTaskFormClass, createTaskInputClass, createTaskLabelClass, createTaskLabelDesc, createTaskMainDiv, createTaskTextArea, createTaskTextAreaDiv,
} from '../styles/styles';


export {

    Link, useState, useContext, useEffect, getLocalStorage, setLocalStorage,

    SignIn, SignUp, EmployeeDashboard, AdminDashboard, Navigate, Route, Routes,

    AllTask, CreateTask, Header, TaskListNo, TaskList, AuthContext, PriorityTag, TaskCount,

    adminDivClass, employeeDivClass,

    headerChildDiv, headerClassBtn, headerClassH1, headerClassSpan, headerLoadingDiv, headerMainDiv,

    taskListNoChildDiv, taskListNoH2, taskListNoH3, taskListNoMainDiv, taskListNoTaskDiv,

    signinBtn, signinForm, signinFormDiv, signinHeaderDiv, signinHeaderH1, signinHeaderP, signinInputClass, signinLabelClass, signinMainDiv, signinSignUp, signinSignUpLink, signinWFull,

    signupAlreadyRegistered, signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupDescDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupLinkToSignIn, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgInfo, signupOrgLeftRight, signupTextareaClass,

    allTaskChildDiv, allTaskChildInnerDiv, allTaskChildH2, allTaskMainDiv, allTaskMainH1, allTaskChildInnerH2, allTaskTasksDiv, allTaskDivSpan, allTaskDivDiv,

    createTaskBtn, createTaskBtnDiv, createTaskChildDiv, createTaskFormClass, createTaskInputClass, createTaskLabelClass, createTaskLabelDesc, createTaskMainDiv, createTaskTextArea, createTaskTextAreaDiv


};