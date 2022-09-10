import { Container } from "./styles";

export function RateStars(){
  return(
    <Container>
<section id="like" class="rating">
  <input type="radio" id="heart_1" name="like" value="1" />
  <label for="heart_1" title="One">&#10084;</label>
  <input type="radio" id="heart_2" name="like" value="2" />
  <label for="heart_2" title="Two">&#10084;</label>
  <input type="radio" id="heart_3" name="like" value="3" />
  <label for="heart_3" title="Three">&#10084;</label>
  <input type="radio" id="heart_4" name="like" value="4" />
  <label for="heart_4" title="Four">&#10084;</label>
  <input type="radio" id="heart_5" name="like" value="5" />
  <label for="heart_5" title="Five">&#10084;</label>
</section>
    </Container>
  )
}