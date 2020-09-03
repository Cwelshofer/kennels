import React from "react"
import { LocationList } from "./location/LocationList.js"
import { LocationProvider } from "./location/LocationProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js";
import { EmployeeProvider } from "./employee/EmployeeProvider.js";
import { CustomerList } from "./customer/CustomerList.js";
import { CustomerProvider } from "./customer/CustomerProvider.js"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        
        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>

        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    </>
)
