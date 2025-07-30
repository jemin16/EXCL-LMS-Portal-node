const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const homeRoutes = require("./routes/homeRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const singleCourseRoutes = require("./routes/singleCourseRoutes");
const giftCourseRoutes = require("./routes/giftCourseRoutes");
const watchCourseRoutes = require("./routes/watchCourseRoutes");
const studentRoutes = require("./routes/studentRoutes");
const instructorProfileRoutes = require("./routes/instructorProfile");
const becomeInstructorRoutes = require("./routes/becomeInstructorRoutes");
const instructorDashboardRoutes = require("./routes/instructorDashboardRoutes");
const instructorCoursesDetailsRoutes = require("./routes/InstrCoursesDetailsRoutes");
const instrEarningRoutes = require("./routes/instrEarningRoutes");
const instructorSettingsRoutes = require("./routes/instructorSettingsRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");
const careerRoutes = require("./routes/careerRoutes");
const publicCheckoutCartRoutes = require("./routes/publicCheckoutCartRoutes");
const instructorMyCourseRoutes = require("./routes/InstructorMyCourseRoutes");
const faqsRoutes = require("./routes/faqsRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use('/api/auth', authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/single-course", singleCourseRoutes);
app.use("/api/giftcourse", giftCourseRoutes);
app.use("/api/watchcourse", watchCourseRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/instructor-profile", instructorProfileRoutes);
app.use("/api/become-instructor", becomeInstructorRoutes);
app.use("/api/instructor-dashboard", instructorDashboardRoutes);
app.use("/api/instructor-courses-details", instructorCoursesDetailsRoutes);
app.use("/api/instructor-earning", instrEarningRoutes);
app.use("/api/instructor-settings", instructorSettingsRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/public-checkout-cart", publicCheckoutCartRoutes);
app.use("/api/instructor-my-course", instructorMyCourseRoutes);
app.use("/api/faqs", faqsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
