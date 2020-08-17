import { SummonMoloch } from '../generated/MysticMolochSummoner/MysticMolochSummoner'
import { Moloch } from '../generated/schema'

export function handleNewMoloch(event: SummonMoloch): void {
  let moloch = new Moloch(event.params.id.toHex())
  moloch.depositToken = event.params._depositToken
  moloch.voteToken = event.params._voteToken
  moloch.summoner = event.params._summoner
  moloch.summonerShares = event.params._summonerShares
  moloch.summonerDeposit = event.params._summonerDeposit
  moloch.proposalDeposit = event.params._proposalDeposit
  moloch.processingReward = event.params._processingReward
  moloch.periodDuration = event.params._periodDuration
  moloch.votingPeriodLength = event.params._votingPeriodLength
  moloch.gracePeriodLength = event.params._gracePeriodLength
  moloch.dilutionBound = event.params._dilutionBound
  moloch.save()
}