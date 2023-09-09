import './About.css';
import { Footre } from './common/Footre';
import { Haeder } from './common/Headres';
import { GoDotFill } from "react-icons/go";

export function About() {
    return (
        <>
            <Haeder />
            <div className='container px-4'>
                <h1 className='fw-bold fs-2 py-3'>About Us</h1>
                <div>
                    <h5 className='fw-bold fs-4'>Designs, at your fingertips</h5>
                    <p>
                        DsignDpo is the top-notch interior decor app crafted by interior designing veterans. The app brings home decor, renovation, and interior design to the behest of your fingers. The aim is to make it seamless for everyone to get appealing designs at an affordable cost and furnish the home of their dreams.
                    </p>
                    <p>
                        You can get all the work done by this app that you expect from a professional interior designer. The catch here is, you can choose from as many designs as you like.
                    </p>
                </div>
                <h4 className='pt-5 fw-bold'>HOW DOES IT WORK?</h4>
                <h4 className='pt-3 fw-bold'>For Home Owners: Design Your Home With Passion</h4>
                <ul className='about_heding'>
                    <>
                        <li>
                            <GoDotFill className='icon' />  Professional 3D Designs
                        </li>
                        <p>
                            Explore impressive designs with proper measurements & details. These are crafted by professional interior designers, and are not random images that you see on the internet.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' />  Choose From Hundreds of Designs
                        </li>
                        <p>
                            For all sections of your home, like bedroom, kitchen, drawing room, temple, etc., you get lots of design ideas based on the home size, utility, and your interests.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> 2D Working Drawings
                        </li>
                        <p>
                            Find exact measurements of the designs in 2D drawings so that your carpenter can easily understand them and start your work instantly.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> List of Materials for Budget Estimation
                        </li>
                        <p>
                            Get details of all materials required for interior design, like plywood, sun mica, adhesive, hardware, etc. It helps you estimate the budget yourself or visit the dealer for a budget idea.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> Share Designs With Loved Ones
                        </li>
                        <p>
                            Every design comes with a column of details, like measurement, material, and other important information that matters to you while getting the design implemented.
                        </p>
                    </>
                    <h4 className='fw-bold pt-3'>For Carpenters: Modern & Trendy Mobile Catalogue</h4>
                    <>
                        <li>
                            <GoDotFill className='icon' /> Well-Arranged Catalogue
                        </li>
                        <p>
                            The app has hundreds of interior designs arranged well in different folders based on the type of area or room. It makes it easier for carpenters to explore designs as per the requirement.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> Give Lots of Choices to Customers
                        </li>
                        <p>
                            The carpenter can offer customers a plethora of design options as per their requirements, interests, and interior design budget.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> Save Time
                        </li>
                        <p>
                            Once customers finalize the design from catalogue, the carpenter can start the work instantly, as all design measurements and details are available within the app.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' />Become Self-Dependent
                        </li>
                        <p>
                            When the carpenter has a catalogue of designs with all the required details, it eliminates the dependency on interior designers and empowers carpenters to become self-dependent.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> Provide Budget Estimation to Customers
                        </li>
                        <p>
                            Based on the interior designs that customers like, carpenters can do a quick calculation of the materials required and provide customers with an estimated budget.
                        </p>
                    </>

                    <>
                        <h4 className='fw-bold pt-4'>An Amazing Marketing Tool for Hardware Dealers</h4>
                        <p>
                            If you are a dealer of plywood, glass, timber, and other hardware required in interior designing, DsignDpo is a great marketing tool for you.
                        </p>
                    </>

                    <>
                        <li>
                            <GoDotFill className='icon' /> Stay Connected With Customers
                        </li>
                        <p>
                            It is crucial for dealers to stay in touch with their customers. But because of lack of time, they fail to do so. Moreover, carpenters are also important customers of a dealer, especially in the plywood industry.
                        </p>
                        <p>
                            DsignDpo helps you add carpenters and homeowners in different categories and keep them in touch.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> Well-Designed Banners for Special Occasions
                        </li>
                        <p>
                            The app has plenty of banner templates related to festivals and special occasions. The dealers can share the banners of their choice with hundreds of customers within a few clicks.
                        </p>
                        <p>
                            Without this app, it is difficult & time-consuming to message hundreds of customers on an individual basis.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> Show Appealing Designs to Customers
                        </li>
                        <p>
                            The app has hundreds of interior designs, using which your customers can design the home of their dreams in an amazing way.
                        </p>
                        <p>
                            You can show these designs to your customers based on their interests, choices, colors, etc., and share the colorful printed design with them.
                        </p>
                    </>
                    <>
                        <li>
                            <GoDotFill className='icon' /> Modern Features for Business Growth
                        </li>
                        <p>
                            We have added several great features and functionalities in this app, keeping in mind the requirements of dealers in modern times.
                        </p>
                        <p>
                            The dealers can use these features for marketing purposes and to keep customers engaged. It fuels business growth.
                        </p>
                    </>
                </ul>
            </div>
            <Footre />
        </>
    );
}