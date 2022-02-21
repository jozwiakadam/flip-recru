import Head from 'next/head';

interface MetaProps {
  title: string;
}

const Meta: React.FC<MetaProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
