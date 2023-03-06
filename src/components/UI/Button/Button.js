import styled from "styled-components";

// import './Button.css';

const Button = styled.button`
  //styled-components 사용법 - 사용이유는 협업시 클래스 명이나 아이디가 겹치는 경우가 발생할 수 있음 이를 해결하고자 사용
  //여기서 설정한 스타일은 다른 컴포넌트에 영향 주지 않음
  //백틱을 붙이는 이유는 메소드로 실행되기때문에

  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
