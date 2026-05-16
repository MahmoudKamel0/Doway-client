describe("login page end-to-end tests", () => {
    beforeEach(() => {
        cy.visit("/auth/login");
    });

    // 1: Test cases related to the layout and structure of the login page.
    it("should display the correct login page title and description", () => {
        const cover = cy.get(".cover");
        cover.should("exist").within(() => {
            cy.get("h1").should("exist").and("have.text", "Employee Management System");
            cy.get("p").should("exist").and("contain.text", "Streamline your workforce operations");
        });
    });

    it("should display welcome section with portal selection and footer", () => {
        const loginRoleSelection = cy.get("#login-role-selection");
        loginRoleSelection.should("exist").within(() => {
            cy.get("h2").should("exist").and("have.text", "Welcome Back");
            cy.get("p").should("exist").and("have.text", "select your portal to securely access the systems");
            cy.get("ul")
                .should("exist")
                .within(() => {
                    cy.get("li a").should("exist");
                });
            cy.get("footer")
                .should("exist")
                .and("have.text", `© ${new Date().getFullYear()} Doway employee Management System. All rights reserved.`);
        });
    });

    // 2: Test cases related to the form signin admin portal login page.
    it("should allow user to select and click the first portal option", () => {
        cy.get("#login-role-selection ul a").first().click();
    });

    it("should display the correct title and form fields on the admin login page", () => {
        cy.visit("/auth/login/admin");
        const adminAuth = cy.get("#admin-auth");
        adminAuth.should("exist").within(() => {
            cy.get("h2").should("have.text", "Hello Admin");
            cy.get("p").should("exist");
            cy.get("input#email").should("exist");
            cy.get("input#password").should("exist");
            cy.get("#btn-submit").should("exist");
        });
    });

    it("should allow admin to enter valid credentials and submit login form", () => {
        cy.visit("/auth/login/admin");
        const adminAuth = cy.get("#admin-auth");
        adminAuth.should("exist").within(() => {
            cy.get("input#email").type("example@gmail.com");
            cy.get("input#password").type("123456789");
            cy.get("#btn-submit").click();
        });
    });

    it("should login successfully with correct admin credentials", () => {
        cy.visit("/auth/login/admin");
        const adminAuth = cy.get("#admin-auth");
        adminAuth.should("exist").within(() => {
            cy.get("input#email").type("ahmedmuti@gmail.com");
            cy.get("input#password").type("Ahmed@123");
            cy.get("#btn-submit").click();
        });
    });

    // 3: Test cases related to the form signin employee portal login page.
    it("should display the correct title and form fields on the admin login page", () => {
        cy.visit("/auth/login/employee");
        const employeeAuth = cy.get("#employee-auth");
        employeeAuth.should("exist").within(() => {
            cy.get("h2").should("exist");
            cy.get("p").should("exist");
            cy.get("input#email").should("exist");
            cy.get("input#password").should("exist");
            cy.get("#btn-submit").should("exist");
        });
    });

    it("should allow employee to enter valid credentials and submit login form", () => {
        cy.visit("/auth/login/employee");
        const employeeAuth = cy.get("#employee-auth");
        employeeAuth.should("exist").within(() => {
            cy.get("input#email").type("example@gmail.com");
            cy.get("input#password").type("123456789");
            cy.get("#btn-submit").click();
        });
    });

    it("should login successfully with correct employee credentials", () => {
        cy.visit("/auth/login/employee");
        const employeeAuth = cy.get("#employee-auth");
        employeeAuth.should("exist").within(() => {
            cy.get("input#email").type("ahmedmuti@gmail.com");
            cy.get("input#password").type("Ahmed@123");
            cy.get("#btn-submit").click();
        });
    });
});
