import { MainContainerStyle } from './styles';

type ChildrenProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: ChildrenProps) {
  return <MainContainerStyle>{children}</MainContainerStyle>;
}
