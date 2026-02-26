import axios from "axios";
// Content
const apiPublication = axios.create({
	baseURL: "/content/publications",
	/**
	 *  / - GET, POST
	 *  /{id}/ - GET, PUT, PATCH, DELETE
	 */
});

const apiContent = axios.create({
	baseURL: "/content/content",
	/**
	 *	/create/ - POST
	 *  /update/{publication_id}/{id}/ - PUT, PATCH
	 */
});

const apiComment = axios.create({
	baseURL: "/content/comments",
	/**
	 *  / - GET, POST
	 *  /{id}/ - GET, PUT, PATCH, DELETE
	 *  /{id}/reply/ - POST
	 *  /by-publication/{publication_id}/ - GET, POST
	 *  /by-publication/{publication_id}/{comment_id}/	- PUT, PATCH
	 */
});

const apiTag = axios.create({
	baseURL: "/content/tags",
	/**
	 *  / - GET, POST
	 *  /{id}/ - GET, PUT, PATCH, DELETE
	 */
});

// Core
const apiUser = axios.create({
	baseURL: "/core/user",
	/**
	 *  /{id}/ - GET, PUT, PATCH
	 *  /currentUser/ - GET
	 *  /list/ - GET
	 *  /update/ - PUT, PATCH ????
	 */
});

const apiLogin = axios.create({
	// POST
	baseURL: "/core/login",
});

const apiLogout = axios.create({
	// POST
	baseURL: "/core/logout",
});

const apiRegister = axios.create({
	// POST
	baseURL: "/core/register",
});

export {
	apiPublication,
	apiContent,
	apiComment,
	apiTag,
	apiLogin,
	apiLogout,
	apiRegister,
	apiUser,
};
