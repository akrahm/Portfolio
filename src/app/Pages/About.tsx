import Layout from '../Components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-8">This is a detailed description about myself.</p>
      </section>
    </Layout>
  );
};

export default About;
