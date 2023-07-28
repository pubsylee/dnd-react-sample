import { gsap } from "gsap";
import AccordionMenu from "../components/ui/AccordionMenu";
import Button from "../components/ui/Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  return (
    <>
      <h2>main 페이지 영역</h2>
      <AccordionMenu title="SC제일은행" list={[
        { id: 1, text: "마이데이터 2차", active: true },
        { id: 2, text: "고령화를 위한 친화적 모바일APP", active: true },
        { id: 3, text: "현대카드 전략적 파트너쉽", active: false },
        { id: 4, text: "온라인 펀드 미스터리 쇼핑", active: false },
        { id: 5, text: "공공데이터", active: false },
      ]}/>
      <Button size='small' color='black'>
        sm black 버튼
      </Button>
      <Button size='medium' color='red'>
        sm black 버튼
      </Button>
      <Button size='large' color='blue'>
        sm black 버튼
      </Button>
    </>
  )
}

export default Home;