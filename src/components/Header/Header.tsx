import { Navigation, Breadcrumb } from './styles';

export default function Header() {
  return (
    <div>
      <Navigation>
        <Breadcrumb href="/dashboard">Home</Breadcrumb>
        <Breadcrumb href="/mywork">My Work</Breadcrumb>
        <Breadcrumb href="/aboutme">About Me</Breadcrumb>
        <Breadcrumb href="/contact">Contact</Breadcrumb>
      </Navigation>
      <h2>it will be a header</h2>
    </div>
  );
}
