// Catch all Segments
// use [[..slug]]   - ie two square bracket to make /docs page also avalable inside the function of below

// [...slug] - catch all ; [[...slug]] -optional catchall segment

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 1) {
    return <>Docs of {params.slug[0]}</>;
  }

  if (params.slug.length === 2) {
    return (
      <>
        Docs of {params.slug[0]} with concept {params.slug[1]}
      </>
    );
  }

  return (
    <>
      <h2>Docs Home Page</h2>
    </>
  );
}
