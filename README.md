# Body Hackers
## What is it?
Body hackers ia a sports massage studio built for athletes and performance. they have clients in nearly every niche imaginable, including but not limited to, strongmen, powerlifters, bodybuilders, runners, cyclists, ironmen, weekend warriors, and sports players, such as football, softball, soccer, baseball, volleyball, lacrosse, and rugby.
## MVP
- user can browse website for basic information, including:
  - landing page
  - contact info
  - the team
  - register/login
- on the user dashboard, users can view and update the following information:
  - athletic niche
  - injuries
  - password
  - schedule a session
- As administrators, admins can log in and perform the following:
  - search for clients based on email, phone number, or name.
  - TBD: Admin can message users directly from the website.

## Checklist
- [X] Build database tables
- [X] Build a "grab all user data" function to join 5 tables and return data
- [ ] figure out AWS or another img hosting service
- [ ] build register endpoint
- [x] build login endpoint
- [ ] build admin search function (must have admin table for auth purposes)

## Ideas
- MENU COMPONENT => We could create a universal click handler, that on click, toggles a class that will affect the target, and then sets all sibling classes to null, allowing us to effectively create an active class that can be active for all endpoints past the intial path, i.e. link to /team, remain active for /team/logan.