import Layout from './Components/Layout';

const Home: React.FC = () => {

  const intro = "Experienced software developer with over 3 years of expertise in ReactJS, skilled in creating robust web applications and visually appealing UIs using Material UI and styled components. I have a proven track record of significantly reducing client support tickets through custom dashboards.I offer top - tier services to elevate your web development projects to the next level."
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg mb-8">{intro}</p>
        <a href="/about" className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</a>
      </section>
    </Layout>
  );
};

export default Home;
