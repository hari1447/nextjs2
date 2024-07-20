import dynamic from 'next/dynamic';

const Component1 = dynamic(() => import('../components/component1'), {
    ssr: false,
  });
export default function Page() {
    return (
        <div>
            <h1> Dash board page </h1>
            <Component1/>
        </div>
      )
  }