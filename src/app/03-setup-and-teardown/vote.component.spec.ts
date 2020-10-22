import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component : VoteComponent;

  beforeEach(()=>{
    component=new VoteComponent();
  })

  it('should upvote', () => {
  component.upVote();
  expect(component.totalVotes).toBe(1);
  });

  it('should downvote', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
