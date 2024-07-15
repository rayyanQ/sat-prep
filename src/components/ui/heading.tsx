
const H1 = ({children}: {children: React.ReactNode}) => {
  return <h1 className="text-4xl font-light">{children}</h1>;
}

const H2 = ({children}: {children: React.ReactNode}) => {
  return <h2 className="text-2xl mb-4">{children}</h2>;
}

const H3 = ({children}: {children: React.ReactNode}) => {
  return <h3 className="text-2xl font-bold">{children}</h3>;
}

const H4 = ({children}: {children: React.ReactNode}) => {
  return <h4 className="text-lg font-medium">{children}</h4>;
}

export { H1, H2, H3, H4 };