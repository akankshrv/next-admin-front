"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { CompanyCreate, CompanyEdit } from "./Annexures/CompanyDetails";

const dataProvider = jsonServerProvider("http://localhost:3000/api/companies");

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>

    <Resource
        name="companies"
        edit={CompanyEdit}
        create={CompanyCreate}
    />
    {/* <Resource name="companies" list={ListGuesser} edit={EditGuesser} /> */}
    {/* <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default AdminApp;