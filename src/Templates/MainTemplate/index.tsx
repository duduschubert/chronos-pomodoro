import { Container } from "../../components/Container/index.tsx";
import { Footer } from "../../components/Footer/index.tsx";
import { Logo } from "../../components/Logo/Index.tsx";
import { Menu } from "../../components/Menu/Index.tsx";

type MainTemplateProps = {
  children: React.ReactNode;
}


export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}
      
      <Container>
        <Footer/>
      </Container>

    </>
  );
}
