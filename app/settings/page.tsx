import dynamic from 'next/dynamic';

const Component2 = dynamic(() => import('../components/component2'), {
    ssr: false,
  });
export default function Page() {
    return (
        <div>
            <h1> Settings page </h1>
            <Component2/>
        </div>
      )
  }