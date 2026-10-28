---
title: Pricing Market Research
---

Catalyst project 1200212, Milestone 4, item C. Research date: 4 October 2026.
Companion to the [pricing strategy](./pricing-strategy.md), which takes its prices from the findings here.

## Summary

1. **Nobody sells this course.** No paid course on the business side of running a stake pool or validator was found on any chain. Operator education is free and technical everywhere.
2. **The audience is small and most of it cannot pay.** Of 1,909 single-pool operators, about 64% are estimated to earn under 2,000 ADA a year from their pool. About 564 earn 5,000 ADA or more.
3. **Those who can pay earn modestly.** A single pool that covers a 340 ADA fixed fee earns about 24,800 ADA a year, roughly $6,200 at $0.25. IOG's own analysis says no single-pool operator earns a competitive wage.
4. **Comparable paid courses sit at $299 to $600.** Self-paced blockchain certificates are $299 to $349; the closest content match, a crypto marketing certification with community calls, is $600.
5. **Self-paced sells at 70 to 85% of the live price** when projects and feedback are kept, which is how the Academy's two tiers differ.
6. **Pool income is paid in ADA and has moved sixfold in fiat terms in a year.** Every comparable course is priced in US dollars.
7. **The free funded cohort did not fill.** Six participants confirmed against 20 seats at a price of zero. Price is not the main barrier; awareness and time are.

## 1. Method

| Source | What it gave | How |
|---|---|---|
| Cardano chain data | Pool counts and an income estimate for every registered pool | Koios public API, epoch 657 (21 to 26 September 2026). Method stated under each table, re-runnable against the public API |
| Published analysis | Pool economics, costs, trends, governance | IOG "SPO incentives" report (data to epoch 623, which ended 9 April 2026), governance records |
| Competitor and comparable prices | What blockchain education costs | Provider pricing pages, read on 4 October 2026 |
| Course-market benchmarks | Price norms for self-paced and cohort courses | Platform data from Kajabi, Podia, Maven |
| Our own cohort | Demand at zero price | Milestone 4 evidence: applications, quiz submissions, attendance |

Only prices seen on a provider's own page are used. Providers whose price could not be read (Udemy, Moralis Academy, edX, Emurgo, Digital Marketing Institute) are left out.

## 2. Who the buyers are

### Pool counts

| Measure | Figure | Source |
|---|---|---|
| Registered pools | 2,889 | Koios, 4 Oct 2026 |
| Single-pool operators (no multi-pool group label) | 1,909 | Koios, 4 Oct 2026 |
| Pools expecting at least one block per epoch | 915 | Koios estimate |
| Pools below the roughly 3M ADA reliable-production threshold | 2,144 of 2,877 (75%), holding 2.7% of stake | [IOG SPO incentives report](https://input-output-hk.github.io/spo-incentives/index.html), epoch 623 (4 to 9 April 2026) |
| Reliably productive pools | 733 | Same |
| Productive single-pool operators | 291, down from 555 at epoch 300, November 2021 (39.1% of productive stake then, 24.4% now). A second section of the same report counts 284 | Same, finding CEN.O1 |
| Share of productive stake held by multi-pool entities | 76.7%, across 83 entities | Same |
| Pool entries against exits since epoch 300 (November 2021) | 3,497 in, 3,070 out | Same |

The two counts of single-pool operators differ because they measure different things: 1,909 is every registered single pool, 291 is those minting reliably.

### What a pool pays its operator

Estimated from each pool's active stake, fixed fee and margin at current reward rates (21,169 blocks and 290 ADA per block in epoch 657, 73 epochs a year). This is an expectation, not a payment record.

| Estimated yearly operator income | Single-pool operators | Share | At $0.25 per ADA |
|---|---|---|---|
| Under 2,000 ADA | 1,230 | 64.4% | under $500 |
| 2,000 to 5,000 ADA | 115 | 6.0% | $500 to $1,240 |
| 5,000 to 10,000 ADA | 102 | 5.3% | $1,240 to $2,480 |
| 10,000 to 50,000 ADA | 434 | 22.7% | $2,480 to $12,400 |
| 50,000 ADA and over | 28 | 1.5% | over $12,400 |

- Among single pools expecting a block at least every 25 days (589 pools), the median is about 13,900 ADA a year, roughly $3,400.
- A pool that fully covers a 340 ADA fixed fee earns 24,820 ADA a year (340 times 73). IOG's report gives the same figure: "A sub-reliable single-pool operator absorbs 48.3% of pool rewards but earns only 24,820 ₳/yr" (finding OPE.O6).
- 64% of pools still charge 340 ADA although the minimum has been 170 ADA since October 2023 ([IOG report](https://input-output-hk.github.io/spo-incentives/index.html)).
- Among single pools with between 10,000 and 3 million ADA of stake (715 pools), 33% declare the 170 ADA minimum and 57% declare 340 ADA (Koios, 4 Oct 2026). Single pools on 170 ADA set a median margin of 1%.
- On a 170 ADA fee, a pool's rewards cover the fee at about 590,000 ADA of stake, and fee income tops out at 12,410 ADA a year (170 times 73). On 340 ADA the line is about 1.18 million ADA. Below the line the operator keeps every reward and delegators receive nothing.

### What it costs to run a pool

IOG puts the cost floor for a single pool at about **$7,160 a year**. In its words: "a single-pool operator needs to extract roughly 390 ADA/epoch today (~$7,160/yr cost floor: infrastructure ~$1,320 to 3,240/yr + DevOps labour ~$5,160/yr min, at $0.25 ADA)" ([IOG SPO incentives, problem statements](https://input-output-hk.github.io/spo-incentives/problem-statements.html)). Its conclusion in the [main report](https://input-output-hk.github.io/spo-incentives/index.html): "No single-pool operator in the retail market earns a competitive wage."

### What the course is worth to a pool

For a pool that does not yet cover its fixed fee, every 100,000 ADA of new delegation adds about **2,100 ADA a year** to the operator's income (about $520 at $0.25). This is the value the course has to be priced against: it teaches how to win and keep delegation.

This figure is our own calculation from public chain data, not a published statistic. The working:

| Step | Figure | Source |
|---|---|---|
| Rewards paid to all pools in epoch 657 | 6,145,710 ADA | [Koios epoch record 657](https://api.koios.rest/api/v1/epoch_info?_epoch_no=657), field `total_rewards` |
| Total active stake in epoch 657 | 21,357,778,070 ADA | Same record, field `active_stake` |
| Reward per ADA staked, per epoch | 0.0288% | First figure divided by the second |
| Epochs in a year | 73 | Same record: the epoch runs 432,000 seconds, which is 5 days |
| Reward per ADA staked, per year | 2.10% | 0.0288% times 73. IOG reports the same yield, 2.0% |
| Reward on 100,000 ADA | 2,100 ADA a year | 100,000 times 2.10% |
| Who receives it | The operator, in full, until the pool's rewards in an epoch exceed its fixed fee | [Cardano Docs, Pledging and rewards](https://docs.cardano.org/about-cardano/learn/pledging-rewards): "First, the declared costs are subtracted and given to the pool operator." |

Once a pool's rewards pass its fixed fee, the operator keeps only the margin on the extra, so the figure applies to small pools, which are the course's main audience.

### What the Cardano Foundation's analysis says about small pools

From "Cardano Economic Parameters" by Massimo Morini of the Cardano Foundation ([whitepaper](https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md), last updated March 2025):

| Finding | In the paper's words |
|---|---|
| Small pools grow by delegation, not pledge | "the incentive to small pools is to increase the stake first by delegation rather than by pledge" |
| Pledge does almost nothing for a small pool | "for pools with stake lower than 10% of the saturation a higher pledge proportion yields little to no advantage" |
| The reward design costs small operators | It can "have a negative effect on inclusion and decentralization, by reducing the rewards of small pool operators" |
| Most pools are very small | "median stake and pledge are very small, due to the presence of very many very small pools" |

For a small pool the only lever on income is delegation, which is what the course teaches operators to win.

### Pressures on income

| Pressure | Detail | Source |
|---|---|---|
| ADA price | 12-month high $0.874, low $0.144, now $0.248 | CoinGecko daily prices, 5 Oct 2025 to 4 Oct 2026 |
| Fee floor | A governance action to cut the minimum fixed fee from 170 to 75 ADA failed on the SPO vote on 1 September 2026 (34.5% yes against 51% needed) and has been resubmitted | [dRep Talk record](https://dreptalk.com/t/reduce-minpoolcost-to-75-ada-and-increase-plutus-memory-limi-8902ed8a/) |
| Falling rewards | "Yield has fallen 5.3% → 2.0% in 413 epochs" | [IOG report](https://input-output-hk.github.io/spo-incentives/index.html), finding OPE.O8 |
| Delegator behaviour | Operators in Intersect focus groups said winning a single delegator is barely worth a marketing budget | [Intersect SPO focus groups](https://committees.docs.intersectmbo.org/intersect-product-committee/committee-outcomes/2030-long-term-cardano-vision/insights-collected/focus-groups/spos-focus-groups) |

## 3. What comparable education costs

### Operator education: free, and technical only

| Provider | What it is | Price | Paid for by |
|---|---|---|---|
| [Cardano Foundation operator handbook](https://developers.cardano.org/docs/operators/) | Pool setup and operation | Free | Cardano Foundation |
| [CoinCashew](https://www.coincashew.com/coins/overview-ada/guide-how-to-build-a-haskell-stakepool-node) | Pool build guide | Free | Delegation and donations |
| [Armada Alliance](https://armada-alliance.com/docs/) | Pool guides for ARM hardware | Free | Not disclosed |
| [ETHStaker](https://ethstaker.org/donate) | Ethereum validator knowledge base | Free | Donations and grants |
| [Gimbalabs](https://projectcatalyst.io/funds/14/cardano-open-ecosystem/sustain-and-maintain-gimbalabs) | Cardano developer courses with on-chain credentials | Free | Catalyst grant, 60,000 ADA |

None of these covers marketing, delegator acquisition or pool finances.

### Paid blockchain courses

| Provider | Course | Format | Price |
|---|---|---|---|
| [Cardano Foundation](https://www.pearsonvue.com/us/en/cardanofoundation.html) | CBCA certification exam | Exam only | $99 |
| [Blockchain Council](https://www.blockchain-council.org/certifications/certified-blockchain-digitalmarketing-professional/) | Blockchain and digital marketing certificate | Self-paced, 5 hours | $299 |
| [Blockchain Council](https://www.blockchain-council.org/certifications/certified-web3-community-expert/) | Web3 community certificate | Self-paced, 10 hours | $299 |
| [Blockchain Council](https://www.blockchain-council.org/certifications/certified-blockchain-expert/) | Certified Blockchain Expert | Self-paced, 10 hours | $349 |
| Same | Same, with 6 live hours added | Live plus self-paced | $449 |
| [Safary](https://safary.club/certification) | Crypto marketing certification | 4 weeks, self-paced with community calls | $600 |
| [RareSkills](https://www.rareskills.io/solidity-bootcamp) | Solidity developer bootcamp | 13-week live cohort, one-to-one mentoring | $5,850 |
| [Metana](https://metana.io/web3-solidity-bootcamp-ethereum-blockchain/) | Solidity developer bootcamp | 16 weeks, cohorts of 10, job guarantee | $7,500 |

The developer bootcamps justify their price with a developer salary afterwards. That does not transfer to a pool earning a few thousand dollars a year.

## 4. What courses cost in general

| Benchmark | Figure | Source |
|---|---|---|
| Most common course price, all topics | $97 | [Kajabi](https://www.kajabi.com/blog/what-experts-actually-charge), 101 million transactions to July 2026 |
| Median price, business and finance courses | $275 | Same |
| Average self-paced course price | $137; 89% of courses are $350 or less | [Podia](https://www.podia.com/articles/how-much-should-you-charge-for-your-online-course), 132,009 sales, 2021 |
| Live cohort course, 6 to 8 live hours with a project | $800 to $1,200 | [Maven](https://help.maven.com/en/articles/6732396-pricing-your-course) |
| Self-paced version of a live course | 70 to 85% of the live price, if projects, feedback and community are kept | Same |
| Early-bird and scholarship norms | Early bird 10 to 20% off; scholarships 50 to 100% off | [Maven](https://help.maven.com/en/articles/5597056-discount-code-strategies) |
| Subsidised small-business course, UK | £750 to the participant, 90% government funded | [Help to Grow: Management](https://www.lancaster.ac.uk/lums/business/help-to-grow/) |
| Cohort against self-paced completion | 53.4% against 41.9% | [Ruzuku 2026 report](https://www.ruzuku.com/learn/articles/state-of-online-course-creation-2026), 26,632 courses on one platform |

Maven's cohort prices assume salaried professionals whose employer often pays. The Academy's buyers pay from pool income.

## 5. What our own cohort shows

| Measure | Figure |
|---|---|
| Price of the funded cohort | Free to Catalyst funded pools |
| Seats offered | 20 |
| Campaign items posted across X, LinkedIn, Discord and email | 35 |
| Persona quiz submissions | 11 |
| Participants confirmed | 6 |

The quiz sorts each operator into one of the project's five business personas. The 11 submissions, counts only:

| Persona | Submissions |
|---|---|
| Techy Adopter (runs the pool for the infrastructure) | 6 |
| Impact Community SPO (runs it to fund a cause) | 3 |
| Investor Mindset (runs it as an asset) | 1 |
| EduTech Guide (runs it to bring people into Cardano) | 1 |
| Internal Catalyst SPO | 0 |

Only one of eleven described the pool as an investment. Most respondents do not think of the pool first as a business that buys training to earn more, which fits a low price and a value claim stated in delegation gained. Eleven answers is a small sample.

A free course with a five-week campaign filled six of twenty seats. Demand, not price, is the limit, and a price will not raise it.

## 6. Ways to test a price

| Method | What it does | Fit for us |
|---|---|---|
| [Van Westendorp price sensitivity meter](https://en.wikipedia.org/wiki/Van_Westendorp%27s_Price_Sensitivity_Meter) | Four questions (too cheap, a bargain, getting expensive, too expensive) give an acceptable range | Needs about 50 answers for a rough read, so one cohort gives a steer only |
| [Gabor-Granger](https://en.wikipedia.org/wiki/Gabor%E2%80%93Granger_method) | Asks whether someone would buy at each of several set prices | Works with the waiting list |
| Real sales | Seats sold at the published price | The strongest evidence, and available from the first paid cohort |

## 7. Limits of this research

- The income table is an estimate from stake and fees. It ignores pledge rewards, missed blocks and other income a pool operator may have.
- "Single-pool" relies on Koios group labels, which miss some multi-pool operators.
- No survey of operators' willingness to pay exists. The quiz did not ask about price.
- What the Academy will pay Andamio after the grant is not known. Andamio's published issuer plans start at $12,000 a year, with cheaper self-serve plans marked "Soon" ([Andamio pricing](https://www.andamio.io/pricing)).
