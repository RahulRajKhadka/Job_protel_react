import { Button } from "../components/ui/button.jsx"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel.jsx"
import companies from "../data/companies.json"
import Autoplay from "embla-carousel-autoplay"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion.jsx"
import faqs from "../data/faq.json"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue"  className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive"  className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
<img src="/banner.jpeg" className="w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card>
    <CardHeader>
      <CardTitle className="font-bold">For Job Seekers</CardTitle>
    </CardHeader>
    <CardContent>
      Discover thousands of opportunities tailored to your skills and experience.  
      Apply to jobs directly, track your applications in one place, and get notified of new openings.  
      Build your profile and showcase your achievements to top employers.
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle className="font-bold">For Employers</CardTitle>
    </CardHeader>
    <CardContent>
      Reach a wide pool of talented candidates effortlessly.  
      Post jobs, manage incoming applications, and communicate with potential hires.  
      Use insights and analytics to make informed hiring decisions and grow your team.
    </CardContent>
  </Card>
</section>


      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </main>
  );
};

export default LandingPage;