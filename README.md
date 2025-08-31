### **Project Requirement Document: Venus-Tariff Web Application Migration**

-----

#### **1. Introduction**

This document outlines the requirements for migrating the existing Venus-Tariff web application to a new, modern platform. The goal is to replicate all core functionalities while enhancing the user experience, improving performance, and ensuring a seamless transition of all existing data.

#### **2. Project Scope**

The project includes the following key areas:

  * **Company Management:** Replicating the functionality to list, add, edit, and delete company profiles.
  * **Tariff Management:** Replicating the functionality to manage, view, and manipulate tariffs for each company.
  * **User Management:** Replicating the functionality to list, add, and manage user accounts and their associated roles.
  * **Data Migration:** Migrating all company, tariff, and user data from the old system to the new one.
  * **User Interface (UI) Redesign:** Implementing a modern, intuitive, and responsive UI.

-----

#### **3. Functional Requirements**

The new application must meet the following functional requirements, with reference screenshots from the existing application for clarity.

**3.1. User Authentication**

  * **Login Page:** The application must have a secure login page.
      * **Fields:** Email and password fields are required.
      * **Functionality:** Users must be able to log in and have an option to reset their password.
      * **Reference Screenshot:**
          * **Description:** The existing login screen with fields for email and password.
          * **Screenshot:**

**3.2. Company Management**

  * **Admin Company List:** A main dashboard-like page for administrators to view and manage all companies.

      * **Table Columns:** The list must display `Company`, `Company ID`, `Email`, `Users`, `Tariffs`, and `Actions`.
      * **Functionality:** The "Actions" column should contain icons for editing and deleting companies.
      * **Filters:** The page should include a dropdown menu to filter the view by selecting a specific company. This feature is crucial for focusing on one company's data.
      * **Action Buttons:** `Change Account for Ven`, `Add Monthly Invoice`, `Add Invoice`, and `Add Company` buttons should be present.
      * **Reference Screenshots:**
          * **Description:** The main "Admin Company List" view showing a table of companies.
          * **Screenshot:**
          * **Description:** A close-up of the company selection dropdown, highlighting the ability to filter the view.
          * **Screenshot:**

  * **Add Company Form:** A dedicated interface for creating new company accounts.

      * **Fields:** The form must include fields for `Account Name`, `Contact`, `Address`, `City`, `State`, `Zip Code`, `Phone`, `Fax`, and `Email`.
      * **Reference Screenshot:**
          * **Description:** A modal or form for adding a new company.
          * **Screenshot:**

**3.3. Tariff Management**

  * **Tariff List:** This page should display a list of tariffs associated with the currently selected company.
      * **Table Columns:** The table must show `File`, `Tariff ID`, `Section ID`, `F-ID`, `FERC-ID`, `Action`, and `Actions`.
      * **Functionality:** The `Actions` column should provide options to `Manage Tariff`, `Copy Tariff`, `Edit Tariff`, and `Delete Tariff`.
      * **Action Buttons:** `Manage Tariff`, `Upload`, and `Add Tariff` buttons should be available.
      * **Reference Screenshot:**
          * **Description:** The "Tariff List" view showing tariffs for a specific company.
          * **Screenshot:**

**3.4. User Management**

  * **User List:** A page to display and manage user accounts.

      * **Table Columns:** The table must display `Username`, `First Name`, `Last Name`, `Email`, `Account Role`, and `Actions`.
      * **Functionality:** The `Actions` column should include edit and delete options for each user.
      * **Action Buttons:** The `Add` and `Reset` buttons should be present.
      * **Reference Screenshot:**
          * **Description:** The "User List" view with a table of users and their roles.
          * **Screenshot:**

  * **Add New User Form:** An interface for creating new user accounts.

      * **Fields:** The form should include fields for `First Name`, `Last Name`, `Email`, `Password`, `Mobile Phone`, and `Work Phone`.
      * **Company and Role Selection:** The form must allow for selecting the `Company` the new user belongs to and assigning their `Role` (e.g., `Site Admin`, `Account Admin`, `Tariff Admin`, `User`).
      * **Reference Screenshot:**
          * **Description:** The "Add New User" form, showing fields and role selection.
          * **Screenshot:**

-----

#### **4. Technical and Non-Functional Requirements**

  * **Platform:** The new application should be built using a modern, scalable web framework (e.g., React, Angular, Vue.js for the frontend, and Node.js, Python/Django, or Java/Spring for the backend).
  * **Database:** A robust and scalable database (e.g., PostgreSQL, MySQL, or a NoSQL solution) is required to handle the existing and future data efficiently.
  * **Data Migration:** A script or process must be developed to migrate all existing data from the legacy system to the new database schema. This migration must be tested thoroughly to ensure data integrity.
  * **Performance:** The new application's pages, especially the lists, must load and respond significantly faster than the current application.
  * **Security:** The new system must adhere to modern web security standards, including secure password hashing, protection against common vulnerabilities (e.g., XSS, CSRF), and proper access controls based on user roles.
  * **Usability:** The UI should be intuitive, with clear navigation and a professional, modern design. It should be easy for both administrators and regular users to perform their tasks.