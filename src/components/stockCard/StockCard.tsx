import React, { FC, Fragment, ReactNode } from 'react';
import {
  Layout,
  CardHeader,
  BrandAndNickNameContainer,
  BrandName,
  NickName,
  RateWrapper,
  BrandWrapper,
  RateSpan,
  ChildrenContainer
} from './StockCard.styles';
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
  VictoryVoronoiContainer
} from 'victory';
import colors from '../../constants/colors';
import ArrowStockUp from '../../assets/icons/arrow-stock-up.svg';
import ArrowStockDown from '../../assets/icons/arrow-stock-down.svg';

export interface OwnProps {
  brand: string;
  nickname: string;
  variationRate: number;
  logo: string;
  isGrow: boolean;
  children?: ReactNode;
}

interface ChronoData {
  x: {
    label: string;
    value: string;
  };
  xAxisLabel: string;
  y: {
    max: {
      label: string;
      value: number;
    };
    mean: {
      label: string;
      value: number;
    };
    min: {
      label: string;
      value: number;
    };
  };
}

const watchData: ChronoData[] = [
  {
    x: {
      label: 'avr. 2013',
      value: '2013-04-01'
    },
    xAxisLabel: 'avr. 2013',
    y: {
      max: {
        label: '21.084 €',
        value: 21084
      },
      mean: {
        label: '20.795 €',
        value: 20795
      },
      min: {
        label: '20.506 €',
        value: 20506
      }
    }
  },
  {
    x: {
      label: 'mai 2013',
      value: '2013-05-01'
    },
    xAxisLabel: 'mai 2013',
    y: {
      max: {
        label: '21.084 €',
        value: 21084
      },
      mean: {
        label: '20.795 €',
        value: 20795
      },
      min: {
        label: '20.506 €',
        value: 20506
      }
    }
  },
  {
    x: {
      label: 'juin 2013',
      value: '2013-06-01'
    },
    xAxisLabel: 'juin 2013',
    y: {
      max: {
        label: '21.084 €',
        value: 21084
      },
      mean: {
        label: '20.795 €',
        value: 20795
      },
      min: {
        label: '20.506 €',
        value: 20506
      }
    }
  },
  {
    x: {
      label: 'juil. 2013',
      value: '2013-07-01'
    },
    xAxisLabel: 'juil. 2013',
    y: {
      max: {
        label: '21.206 €',
        value: 21206
      },
      mean: {
        label: '20.499 €',
        value: 20499
      },
      min: {
        label: '19.792 €',
        value: 19792
      }
    }
  },
  {
    x: {
      label: 'août 2013',
      value: '2013-08-01'
    },
    xAxisLabel: 'août 2013',
    y: {
      max: {
        label: '21.206 €',
        value: 21206
      },
      mean: {
        label: '20.499 €',
        value: 20499
      },
      min: {
        label: '19.792 €',
        value: 19792
      }
    }
  },
  {
    x: {
      label: 'sept. 2013',
      value: '2013-09-01'
    },
    xAxisLabel: 'sept. 2013',
    y: {
      max: {
        label: '21.206 €',
        value: 21206
      },
      mean: {
        label: '20.499 €',
        value: 20499
      },
      min: {
        label: '19.792 €',
        value: 19792
      }
    }
  },
  {
    x: {
      label: 'oct. 2013',
      value: '2013-10-01'
    },
    xAxisLabel: 'oct. 2013',
    y: {
      max: {
        label: '21.206 €',
        value: 21206
      },
      mean: {
        label: '20.499 €',
        value: 20499
      },
      min: {
        label: '19.792 €',
        value: 19792
      }
    }
  },
  {
    x: {
      label: 'nov. 2013',
      value: '2013-11-01'
    },
    xAxisLabel: 'nov. 2013',
    y: {
      max: {
        label: '21.207 €',
        value: 21207
      },
      mean: {
        label: '20.500 €',
        value: 20500
      },
      min: {
        label: '19.793 €',
        value: 19793
      }
    }
  },
  {
    x: {
      label: 'déc. 2013',
      value: '2013-12-01'
    },
    xAxisLabel: 'déc. 2013',
    y: {
      max: {
        label: '21.207 €',
        value: 21207
      },
      mean: {
        label: '20.500 €',
        value: 20500
      },
      min: {
        label: '19.793 €',
        value: 19793
      }
    }
  },
  {
    x: {
      label: 'janv. 2014',
      value: '2014-01-01'
    },
    xAxisLabel: 'janv. 2014',
    y: {
      max: {
        label: '21.207 €',
        value: 21207
      },
      mean: {
        label: '20.500 €',
        value: 20500
      },
      min: {
        label: '19.793 €',
        value: 19793
      }
    }
  },
  {
    x: {
      label: 'févr. 2014',
      value: '2014-02-01'
    },
    xAxisLabel: 'févr. 2014',
    y: {
      max: {
        label: '21.000 €',
        value: 21000
      },
      mean: {
        label: '20.500 €',
        value: 20500
      },
      min: {
        label: '20.000 €',
        value: 20000
      }
    }
  },
  {
    x: {
      label: 'mars 2014',
      value: '2014-03-01'
    },
    xAxisLabel: 'mars 2014',
    y: {
      max: {
        label: '21.000 €',
        value: 21000
      },
      mean: {
        label: '20.500 €',
        value: 20500
      },
      min: {
        label: '20.000 €',
        value: 20000
      }
    }
  },
  {
    x: {
      label: 'avr. 2014',
      value: '2014-04-01'
    },
    xAxisLabel: 'avr. 2014',
    y: {
      max: {
        label: '21.000 €',
        value: 21000
      },
      mean: {
        label: '20.500 €',
        value: 20500
      },
      min: {
        label: '20.000 €',
        value: 20000
      }
    }
  },
  {
    x: {
      label: 'mai 2014',
      value: '2014-05-01'
    },
    xAxisLabel: 'mai 2014',
    y: {
      max: {
        label: '21.103 €',
        value: 21103
      },
      mean: {
        label: '20.750 €',
        value: 20750
      },
      min: {
        label: '20.397 €',
        value: 20397
      }
    }
  },
  {
    x: {
      label: 'juin 2014',
      value: '2014-06-01'
    },
    xAxisLabel: 'juin 2014',
    y: {
      max: {
        label: '20.846 €',
        value: 20846
      },
      mean: {
        label: '20.564 €',
        value: 20564
      },
      min: {
        label: '20.282 €',
        value: 20282
      }
    }
  },
  {
    x: {
      label: 'juil. 2014',
      value: '2014-07-01'
    },
    xAxisLabel: 'juil. 2014',
    y: {
      max: {
        label: '20.846 €',
        value: 20846
      },
      mean: {
        label: '20.564 €',
        value: 20564
      },
      min: {
        label: '20.282 €',
        value: 20282
      }
    }
  },
  {
    x: {
      label: 'août 2014',
      value: '2014-08-01'
    },
    xAxisLabel: 'août 2014',
    y: {
      max: {
        label: '20.846 €',
        value: 20846
      },
      mean: {
        label: '20.564 €',
        value: 20564
      },
      min: {
        label: '20.282 €',
        value: 20282
      }
    }
  },
  {
    x: {
      label: 'sept. 2014',
      value: '2014-09-01'
    },
    xAxisLabel: 'sept. 2014',
    y: {
      max: {
        label: '20.889 €',
        value: 20889
      },
      mean: {
        label: '20.607 €',
        value: 20607
      },
      min: {
        label: '20.325 €',
        value: 20325
      }
    }
  },
  {
    x: {
      label: 'oct. 2014',
      value: '2014-10-01'
    },
    xAxisLabel: 'oct. 2014',
    y: {
      max: {
        label: '21.246 €',
        value: 21246
      },
      mean: {
        label: '20.964 €',
        value: 20964
      },
      min: {
        label: '20.682 €',
        value: 20682
      }
    }
  },
  {
    x: {
      label: 'nov. 2014',
      value: '2014-11-01'
    },
    xAxisLabel: 'nov. 2014',
    y: {
      max: {
        label: '21.246 €',
        value: 21246
      },
      mean: {
        label: '20.964 €',
        value: 20964
      },
      min: {
        label: '20.682 €',
        value: 20682
      }
    }
  },
  {
    x: {
      label: 'déc. 2014',
      value: '2014-12-01'
    },
    xAxisLabel: 'déc. 2014',
    y: {
      max: {
        label: '21.246 €',
        value: 21246
      },
      mean: {
        label: '20.964 €',
        value: 20964
      },
      min: {
        label: '20.682 €',
        value: 20682
      }
    }
  },
  {
    x: {
      label: 'janv. 2015',
      value: '2015-01-01'
    },
    xAxisLabel: 'janv. 2015',
    y: {
      max: {
        label: '22.045 €',
        value: 22045
      },
      mean: {
        label: '21.203 €',
        value: 21203
      },
      min: {
        label: '20.361 €',
        value: 20361
      }
    }
  },
  {
    x: {
      label: 'févr. 2015',
      value: '2015-02-01'
    },
    xAxisLabel: 'févr. 2015',
    y: {
      max: {
        label: '24.050 €',
        value: 24050
      },
      mean: {
        label: '22.402 €',
        value: 22402
      },
      min: {
        label: '20.754 €',
        value: 20754
      }
    }
  },
  {
    x: {
      label: 'mars 2015',
      value: '2015-03-01'
    },
    xAxisLabel: 'mars 2015',
    y: {
      max: {
        label: '24.318 €',
        value: 24318
      },
      mean: {
        label: '22.269 €',
        value: 22269
      },
      min: {
        label: '20.220 €',
        value: 20220
      }
    }
  },
  {
    x: {
      label: 'avr. 2015',
      value: '2015-04-01'
    },
    xAxisLabel: 'avr. 2015',
    y: {
      max: {
        label: '24.794 €',
        value: 24794
      },
      mean: {
        label: '23.132 €',
        value: 23132
      },
      min: {
        label: '21.470 €',
        value: 21470
      }
    }
  },
  {
    x: {
      label: 'mai 2015',
      value: '2015-05-01'
    },
    xAxisLabel: 'mai 2015',
    y: {
      max: {
        label: '24.643 €',
        value: 24643
      },
      mean: {
        label: '23.206 €',
        value: 23206
      },
      min: {
        label: '21.769 €',
        value: 21769
      }
    }
  },
  {
    x: {
      label: 'juin 2015',
      value: '2015-06-01'
    },
    xAxisLabel: 'juin 2015',
    y: {
      max: {
        label: '24.469 €',
        value: 24469
      },
      mean: {
        label: '23.844 €',
        value: 23844
      },
      min: {
        label: '23.219 €',
        value: 23219
      }
    }
  },
  {
    x: {
      label: 'juil. 2015',
      value: '2015-07-01'
    },
    xAxisLabel: 'juil. 2015',
    y: {
      max: {
        label: '25.588 €',
        value: 25588
      },
      mean: {
        label: '23.706 €',
        value: 23706
      },
      min: {
        label: '21.824 €',
        value: 21824
      }
    }
  },
  {
    x: {
      label: 'août 2015',
      value: '2015-08-01'
    },
    xAxisLabel: 'août 2015',
    y: {
      max: {
        label: '26.389 €',
        value: 26389
      },
      mean: {
        label: '24.116 €',
        value: 24116
      },
      min: {
        label: '21.843 €',
        value: 21843
      }
    }
  },
  {
    x: {
      label: 'sept. 2015',
      value: '2015-09-01'
    },
    xAxisLabel: 'sept. 2015',
    y: {
      max: {
        label: '26.766 €',
        value: 26766
      },
      mean: {
        label: '24.306 €',
        value: 24306
      },
      min: {
        label: '21.846 €',
        value: 21846
      }
    }
  },
  {
    x: {
      label: 'oct. 2015',
      value: '2015-10-01'
    },
    xAxisLabel: 'oct. 2015',
    y: {
      max: {
        label: '25.101 €',
        value: 25101
      },
      mean: {
        label: '23.152 €',
        value: 23152
      },
      min: {
        label: '21.203 €',
        value: 21203
      }
    }
  },
  {
    x: {
      label: 'nov. 2015',
      value: '2015-11-01'
    },
    xAxisLabel: 'nov. 2015',
    y: {
      max: {
        label: '28.207 €',
        value: 28207
      },
      mean: {
        label: '25.147 €',
        value: 25147
      },
      min: {
        label: '22.087 €',
        value: 22087
      }
    }
  },
  {
    x: {
      label: 'déc. 2015',
      value: '2015-12-01'
    },
    xAxisLabel: 'déc. 2015',
    y: {
      max: {
        label: '27.047 €',
        value: 27047
      },
      mean: {
        label: '24.551 €',
        value: 24551
      },
      min: {
        label: '22.055 €',
        value: 22055
      }
    }
  },
  {
    x: {
      label: 'janv. 2016',
      value: '2016-01-01'
    },
    xAxisLabel: 'janv. 2016',
    y: {
      max: {
        label: '26.713 €',
        value: 26713
      },
      mean: {
        label: '25.348 €',
        value: 25348
      },
      min: {
        label: '23.983 €',
        value: 23983
      }
    }
  },
  {
    x: {
      label: 'févr. 2016',
      value: '2016-02-01'
    },
    xAxisLabel: 'févr. 2016',
    y: {
      max: {
        label: '28.235 €',
        value: 28235
      },
      mean: {
        label: '26.218 €',
        value: 26218
      },
      min: {
        label: '24.201 €',
        value: 24201
      }
    }
  },
  {
    x: {
      label: 'mars 2016',
      value: '2016-03-01'
    },
    xAxisLabel: 'mars 2016',
    y: {
      max: {
        label: '28.109 €',
        value: 28109
      },
      mean: {
        label: '25.922 €',
        value: 25922
      },
      min: {
        label: '23.735 €',
        value: 23735
      }
    }
  },
  {
    x: {
      label: 'avr. 2016',
      value: '2016-04-01'
    },
    xAxisLabel: 'avr. 2016',
    y: {
      max: {
        label: '27.272 €',
        value: 27272
      },
      mean: {
        label: '25.609 €',
        value: 25609
      },
      min: {
        label: '23.946 €',
        value: 23946
      }
    }
  },
  {
    x: {
      label: 'mai 2016',
      value: '2016-05-01'
    },
    xAxisLabel: 'mai 2016',
    y: {
      max: {
        label: '26.927 €',
        value: 26927
      },
      mean: {
        label: '25.328 €',
        value: 25328
      },
      min: {
        label: '23.729 €',
        value: 23729
      }
    }
  },
  {
    x: {
      label: 'juin 2016',
      value: '2016-06-01'
    },
    xAxisLabel: 'juin 2016',
    y: {
      max: {
        label: '27.835 €',
        value: 27835
      },
      mean: {
        label: '25.622 €',
        value: 25622
      },
      min: {
        label: '23.409 €',
        value: 23409
      }
    }
  },
  {
    x: {
      label: 'juil. 2016',
      value: '2016-07-01'
    },
    xAxisLabel: 'juil. 2016',
    y: {
      max: {
        label: '27.626 €',
        value: 27626
      },
      mean: {
        label: '25.542 €',
        value: 25542
      },
      min: {
        label: '23.458 €',
        value: 23458
      }
    }
  },
  {
    x: {
      label: 'août 2016',
      value: '2016-08-01'
    },
    xAxisLabel: 'août 2016',
    y: {
      max: {
        label: '28.034 €',
        value: 28034
      },
      mean: {
        label: '26.520 €',
        value: 26520
      },
      min: {
        label: '25.006 €',
        value: 25006
      }
    }
  },
  {
    x: {
      label: 'sept. 2016',
      value: '2016-09-01'
    },
    xAxisLabel: 'sept. 2016',
    y: {
      max: {
        label: '27.963 €',
        value: 27963
      },
      mean: {
        label: '26.912 €',
        value: 26912
      },
      min: {
        label: '25.861 €',
        value: 25861
      }
    }
  },
  {
    x: {
      label: 'oct. 2016',
      value: '2016-10-01'
    },
    xAxisLabel: 'oct. 2016',
    y: {
      max: {
        label: '27.206 €',
        value: 27206
      },
      mean: {
        label: '26.308 €',
        value: 26308
      },
      min: {
        label: '25.410 €',
        value: 25410
      }
    }
  },
  {
    x: {
      label: 'nov. 2016',
      value: '2016-11-01'
    },
    xAxisLabel: 'nov. 2016',
    y: {
      max: {
        label: '27.718 €',
        value: 27718
      },
      mean: {
        label: '26.480 €',
        value: 26480
      },
      min: {
        label: '25.242 €',
        value: 25242
      }
    }
  },
  {
    x: {
      label: 'déc. 2016',
      value: '2016-12-01'
    },
    xAxisLabel: 'déc. 2016',
    y: {
      max: {
        label: '28.843 €',
        value: 28843
      },
      mean: {
        label: '27.092 €',
        value: 27092
      },
      min: {
        label: '25.341 €',
        value: 25341
      }
    }
  },
  {
    x: {
      label: 'janv. 2017',
      value: '2017-01-01'
    },
    xAxisLabel: 'janv. 2017',
    y: {
      max: {
        label: '29.596 €',
        value: 29596
      },
      mean: {
        label: '28.118 €',
        value: 28118
      },
      min: {
        label: '26.640 €',
        value: 26640
      }
    }
  },
  {
    x: {
      label: 'févr. 2017',
      value: '2017-02-01'
    },
    xAxisLabel: 'févr. 2017',
    y: {
      max: {
        label: '32.101 €',
        value: 32101
      },
      mean: {
        label: '28.151 €',
        value: 28151
      },
      min: {
        label: '24.201 €',
        value: 24201
      }
    }
  },
  {
    x: {
      label: 'mars 2017',
      value: '2017-03-01'
    },
    xAxisLabel: 'mars 2017',
    y: {
      max: {
        label: '29.981 €',
        value: 29981
      },
      mean: {
        label: '28.552 €',
        value: 28552
      },
      min: {
        label: '27.123 €',
        value: 27123
      }
    }
  },
  {
    x: {
      label: 'avr. 2017',
      value: '2017-04-01'
    },
    xAxisLabel: 'avr. 2017',
    y: {
      max: {
        label: '33.452 €',
        value: 33452
      },
      mean: {
        label: '30.769 €',
        value: 30769
      },
      min: {
        label: '28.086 €',
        value: 28086
      }
    }
  },
  {
    x: {
      label: 'mai 2017',
      value: '2017-05-01'
    },
    xAxisLabel: 'mai 2017',
    y: {
      max: {
        label: '35.023 €',
        value: 35023
      },
      mean: {
        label: '32.098 €',
        value: 32098
      },
      min: {
        label: '29.173 €',
        value: 29173
      }
    }
  },
  {
    x: {
      label: 'juin 2017',
      value: '2017-06-01'
    },
    xAxisLabel: 'juin 2017',
    y: {
      max: {
        label: '33.860 €',
        value: 33860
      },
      mean: {
        label: '31.513 €',
        value: 31513
      },
      min: {
        label: '29.166 €',
        value: 29166
      }
    }
  },
  {
    x: {
      label: 'juil. 2017',
      value: '2017-07-01'
    },
    xAxisLabel: 'juil. 2017',
    y: {
      max: {
        label: '34.732 €',
        value: 34732
      },
      mean: {
        label: '33.099 €',
        value: 33099
      },
      min: {
        label: '31.466 €',
        value: 31466
      }
    }
  },
  {
    x: {
      label: 'août 2017',
      value: '2017-08-01'
    },
    xAxisLabel: 'août 2017',
    y: {
      max: {
        label: '34.990 €',
        value: 34990
      },
      mean: {
        label: '33.733 €',
        value: 33733
      },
      min: {
        label: '32.476 €',
        value: 32476
      }
    }
  },
  {
    x: {
      label: 'sept. 2017',
      value: '2017-09-01'
    },
    xAxisLabel: 'sept. 2017',
    y: {
      max: {
        label: '35.428 €',
        value: 35428
      },
      mean: {
        label: '33.915 €',
        value: 33915
      },
      min: {
        label: '32.402 €',
        value: 32402
      }
    }
  },
  {
    x: {
      label: 'oct. 2017',
      value: '2017-10-01'
    },
    xAxisLabel: 'oct. 2017',
    y: {
      max: {
        label: '35.660 €',
        value: 35660
      },
      mean: {
        label: '34.356 €',
        value: 34356
      },
      min: {
        label: '33.052 €',
        value: 33052
      }
    }
  },
  {
    x: {
      label: 'nov. 2017',
      value: '2017-11-01'
    },
    xAxisLabel: 'nov. 2017',
    y: {
      max: {
        label: '36.249 €',
        value: 36249
      },
      mean: {
        label: '34.556 €',
        value: 34556
      },
      min: {
        label: '32.863 €',
        value: 32863
      }
    }
  },
  {
    x: {
      label: 'déc. 2017',
      value: '2017-12-01'
    },
    xAxisLabel: 'déc. 2017',
    y: {
      max: {
        label: '36.962 €',
        value: 36962
      },
      mean: {
        label: '35.213 €',
        value: 35213
      },
      min: {
        label: '33.464 €',
        value: 33464
      }
    }
  },
  {
    x: {
      label: 'janv. 2018',
      value: '2018-01-01'
    },
    xAxisLabel: 'janv. 2018',
    y: {
      max: {
        label: '37.644 €',
        value: 37644
      },
      mean: {
        label: '35.980 €',
        value: 35980
      },
      min: {
        label: '34.316 €',
        value: 34316
      }
    }
  },
  {
    x: {
      label: 'févr. 2018',
      value: '2018-02-01'
    },
    xAxisLabel: 'févr. 2018',
    y: {
      max: {
        label: '39.879 €',
        value: 39879
      },
      mean: {
        label: '36.871 €',
        value: 36871
      },
      min: {
        label: '33.863 €',
        value: 33863
      }
    }
  },
  {
    x: {
      label: 'mars 2018',
      value: '2018-03-01'
    },
    xAxisLabel: 'mars 2018',
    y: {
      max: {
        label: '42.060 €',
        value: 42060
      },
      mean: {
        label: '39.453 €',
        value: 39453
      },
      min: {
        label: '36.846 €',
        value: 36846
      }
    }
  },
  {
    x: {
      label: 'avr. 2018',
      value: '2018-04-01'
    },
    xAxisLabel: 'avr. 2018',
    y: {
      max: {
        label: '47.439 €',
        value: 47439
      },
      mean: {
        label: '44.231 €',
        value: 44231
      },
      min: {
        label: '41.023 €',
        value: 41023
      }
    }
  },
  {
    x: {
      label: 'mai 2018',
      value: '2018-05-01'
    },
    xAxisLabel: 'mai 2018',
    y: {
      max: {
        label: '47.777 €',
        value: 47777
      },
      mean: {
        label: '46.293 €',
        value: 46293
      },
      min: {
        label: '44.809 €',
        value: 44809
      }
    }
  },
  {
    x: {
      label: 'juin 2018',
      value: '2018-06-01'
    },
    xAxisLabel: 'juin 2018',
    y: {
      max: {
        label: '48.225 €',
        value: 48225
      },
      mean: {
        label: '46.857 €',
        value: 46857
      },
      min: {
        label: '45.489 €',
        value: 45489
      }
    }
  },
  {
    x: {
      label: 'juil. 2018',
      value: '2018-07-01'
    },
    xAxisLabel: 'juil. 2018',
    y: {
      max: {
        label: '49.695 €',
        value: 49695
      },
      mean: {
        label: '47.949 €',
        value: 47949
      },
      min: {
        label: '46.203 €',
        value: 46203
      }
    }
  },
  {
    x: {
      label: 'août 2018',
      value: '2018-08-01'
    },
    xAxisLabel: 'août 2018',
    y: {
      max: {
        label: '49.468 €',
        value: 49468
      },
      mean: {
        label: '47.578 €',
        value: 47578
      },
      min: {
        label: '45.688 €',
        value: 45688
      }
    }
  },
  {
    x: {
      label: 'sept. 2018',
      value: '2018-09-01'
    },
    xAxisLabel: 'sept. 2018',
    y: {
      max: {
        label: '50.094 €',
        value: 50094
      },
      mean: {
        label: '48.294 €',
        value: 48294
      },
      min: {
        label: '46.494 €',
        value: 46494
      }
    }
  },
  {
    x: {
      label: 'oct. 2018',
      value: '2018-10-01'
    },
    xAxisLabel: 'oct. 2018',
    y: {
      max: {
        label: '50.385 €',
        value: 50385
      },
      mean: {
        label: '48.992 €',
        value: 48992
      },
      min: {
        label: '47.599 €',
        value: 47599
      }
    }
  },
  {
    x: {
      label: 'nov. 2018',
      value: '2018-11-01'
    },
    xAxisLabel: 'nov. 2018',
    y: {
      max: {
        label: '51.217 €',
        value: 51217
      },
      mean: {
        label: '49.819 €',
        value: 49819
      },
      min: {
        label: '48.421 €',
        value: 48421
      }
    }
  },
  {
    x: {
      label: 'déc. 2018',
      value: '2018-12-01'
    },
    xAxisLabel: 'déc. 2018',
    y: {
      max: {
        label: '52.803 €',
        value: 52803
      },
      mean: {
        label: '50.894 €',
        value: 50894
      },
      min: {
        label: '48.985 €',
        value: 48985
      }
    }
  },
  {
    x: {
      label: 'janv. 2019',
      value: '2019-01-01'
    },
    xAxisLabel: 'janv. 2019',
    y: {
      max: {
        label: '54.118 €',
        value: 54118
      },
      mean: {
        label: '52.001 €',
        value: 52001
      },
      min: {
        label: '49.884 €',
        value: 49884
      }
    }
  },
  {
    x: {
      label: 'févr. 2019',
      value: '2019-02-01'
    },
    xAxisLabel: 'févr. 2019',
    y: {
      max: {
        label: '56.724 €',
        value: 56724
      },
      mean: {
        label: '54.449 €',
        value: 54449
      },
      min: {
        label: '52.174 €',
        value: 52174
      }
    }
  },
  {
    x: {
      label: 'mars 2019',
      value: '2019-03-01'
    },
    xAxisLabel: 'mars 2019',
    y: {
      max: {
        label: '61.552 €',
        value: 61552
      },
      mean: {
        label: '58.032 €',
        value: 58032
      },
      min: {
        label: '54.512 €',
        value: 54512
      }
    }
  },
  {
    x: {
      label: 'avr. 2019',
      value: '2019-04-01'
    },
    xAxisLabel: 'avr. 2019',
    y: {
      max: {
        label: '64.168 €',
        value: 64168
      },
      mean: {
        label: '61.088 €',
        value: 61088
      },
      min: {
        label: '58.008 €',
        value: 58008
      }
    }
  },
  {
    x: {
      label: 'mai 2019',
      value: '2019-05-01'
    },
    xAxisLabel: 'mai 2019',
    y: {
      max: {
        label: '67.624 €',
        value: 67624
      },
      mean: {
        label: '64.309 €',
        value: 64309
      },
      min: {
        label: '60.994 €',
        value: 60994
      }
    }
  },
  {
    x: {
      label: 'juin 2019',
      value: '2019-06-01'
    },
    xAxisLabel: 'juin 2019',
    y: {
      max: {
        label: '68.441 €',
        value: 68441
      },
      mean: {
        label: '64.257 €',
        value: 64257
      },
      min: {
        label: '60.073 €',
        value: 60073
      }
    }
  },
  {
    x: {
      label: 'juil. 2019',
      value: '2019-07-01'
    },
    xAxisLabel: 'juil. 2019',
    y: {
      max: {
        label: '70.296 €',
        value: 70296
      },
      mean: {
        label: '66.665 €',
        value: 66665
      },
      min: {
        label: '63.034 €',
        value: 63034
      }
    }
  },
  {
    x: {
      label: 'août 2019',
      value: '2019-08-01'
    },
    xAxisLabel: 'août 2019',
    y: {
      max: {
        label: '72.148 €',
        value: 72148
      },
      mean: {
        label: '69.229 €',
        value: 69229
      },
      min: {
        label: '66.310 €',
        value: 66310
      }
    }
  },
  {
    x: {
      label: 'sept. 2019',
      value: '2019-09-01'
    },
    xAxisLabel: 'sept. 2019',
    y: {
      max: {
        label: '71.301 €',
        value: 71301
      },
      mean: {
        label: '68.949 €',
        value: 68949
      },
      min: {
        label: '66.597 €',
        value: 66597
      }
    }
  },
  {
    x: {
      label: 'oct. 2019',
      value: '2019-10-01'
    },
    xAxisLabel: 'oct. 2019',
    y: {
      max: {
        label: '71.025 €',
        value: 71025
      },
      mean: {
        label: '68.446 €',
        value: 68446
      },
      min: {
        label: '65.867 €',
        value: 65867
      }
    }
  },
  {
    x: {
      label: 'nov. 2019',
      value: '2019-11-01'
    },
    xAxisLabel: 'nov. 2019',
    y: {
      max: {
        label: '70.132 €',
        value: 70132
      },
      mean: {
        label: '67.578 €',
        value: 67578
      },
      min: {
        label: '65.024 €',
        value: 65024
      }
    }
  },
  {
    x: {
      label: 'déc. 2019',
      value: '2019-12-01'
    },
    xAxisLabel: 'déc. 2019',
    y: {
      max: {
        label: '68.978 €',
        value: 68978
      },
      mean: {
        label: '66.401 €',
        value: 66401
      },
      min: {
        label: '63.824 €',
        value: 63824
      }
    }
  },
  {
    x: {
      label: 'janv. 2020',
      value: '2020-01-01'
    },
    xAxisLabel: 'janv. 2020',
    y: {
      max: {
        label: '68.966 €',
        value: 68966
      },
      mean: {
        label: '66.329 €',
        value: 66329
      },
      min: {
        label: '63.692 €',
        value: 63692
      }
    }
  },
  {
    x: {
      label: 'févr. 2020',
      value: '2020-02-01'
    },
    xAxisLabel: 'févr. 2020',
    y: {
      max: {
        label: '69.282 €',
        value: 69282
      },
      mean: {
        label: '66.573 €',
        value: 66573
      },
      min: {
        label: '63.864 €',
        value: 63864
      }
    }
  },
  {
    x: {
      label: 'mars 2020',
      value: '2020-03-01'
    },
    xAxisLabel: 'mars 2020',
    y: {
      max: {
        label: '68.666 €',
        value: 68666
      },
      mean: {
        label: '65.866 €',
        value: 65866
      },
      min: {
        label: '63.066 €',
        value: 63066
      }
    }
  },
  {
    x: {
      label: 'avr. 2020',
      value: '2020-04-01'
    },
    xAxisLabel: 'avr. 2020',
    y: {
      max: {
        label: '67.916 €',
        value: 67916
      },
      mean: {
        label: '65.031 €',
        value: 65031
      },
      min: {
        label: '62.146 €',
        value: 62146
      }
    }
  },
  {
    x: {
      label: 'mai 2020',
      value: '2020-05-01'
    },
    xAxisLabel: 'mai 2020',
    y: {
      max: {
        label: '67.830 €',
        value: 67830
      },
      mean: {
        label: '65.192 €',
        value: 65192
      },
      min: {
        label: '62.554 €',
        value: 62554
      }
    }
  },
  {
    x: {
      label: 'juin 2020',
      value: '2020-06-01'
    },
    xAxisLabel: 'juin 2020',
    y: {
      max: {
        label: '65.355 €',
        value: 65355
      },
      mean: {
        label: '63.216 €',
        value: 63216
      },
      min: {
        label: '61.077 €',
        value: 61077
      }
    }
  },
  {
    x: {
      label: 'juil. 2020',
      value: '2020-07-01'
    },
    xAxisLabel: 'juil. 2020',
    y: {
      max: {
        label: '64.632 €',
        value: 64632
      },
      mean: {
        label: '62.381 €',
        value: 62381
      },
      min: {
        label: '60.130 €',
        value: 60130
      }
    }
  },
  {
    x: {
      label: 'août 2020',
      value: '2020-08-01'
    },
    xAxisLabel: 'août 2020',
    y: {
      max: {
        label: '65.099 €',
        value: 65099
      },
      mean: {
        label: '62.485 €',
        value: 62485
      },
      min: {
        label: '59.871 €',
        value: 59871
      }
    }
  },
  {
    x: {
      label: 'sept. 2020',
      value: '2020-09-01'
    },
    xAxisLabel: 'sept. 2020',
    y: {
      max: {
        label: '67.016 €',
        value: 67016
      },
      mean: {
        label: '64.622 €',
        value: 64622
      },
      min: {
        label: '62.228 €',
        value: 62228
      }
    }
  },
  {
    x: {
      label: 'oct. 2020',
      value: '2020-10-01'
    },
    xAxisLabel: 'oct. 2020',
    y: {
      max: {
        label: '69.314 €',
        value: 69314
      },
      mean: {
        label: '65.868 €',
        value: 65868
      },
      min: {
        label: '62.422 €',
        value: 62422
      }
    }
  },
  {
    x: {
      label: 'nov. 2020',
      value: '2020-11-01'
    },
    xAxisLabel: 'nov. 2020',
    y: {
      max: {
        label: '71.178 €',
        value: 71178
      },
      mean: {
        label: '67.649 €',
        value: 67649
      },
      min: {
        label: '64.120 €',
        value: 64120
      }
    }
  },
  {
    x: {
      label: 'déc. 2020',
      value: '2020-12-01'
    },
    xAxisLabel: 'déc. 2020',
    y: {
      max: {
        label: '72.021 €',
        value: 72021
      },
      mean: {
        label: '68.913 €',
        value: 68913
      },
      min: {
        label: '65.805 €',
        value: 65805
      }
    }
  },
  {
    x: {
      label: 'janv. 2021',
      value: '2021-01-01'
    },
    xAxisLabel: 'janv. 2021',
    y: {
      max: {
        label: '78.182 €',
        value: 78182
      },
      mean: {
        label: '73.841 €',
        value: 73841
      },
      min: {
        label: '69.500 €',
        value: 69500
      }
    }
  }
];

const transformData = data =>
  data.map((datum: ChronoData) => ({
    x: datum.xAxisLabel,
    y: datum.y.max.value
  }));

const StockCard: FC<OwnProps> = ({
  brand,
  nickname,
  isGrow,
  variationRate,
  logo,
  children
}) => {
  const Logo = logo;
  return (
    <Layout>
      <CardHeader>
        <BrandWrapper>
          <Logo />
          <BrandAndNickNameContainer>
            <BrandName>{brand}</BrandName>
            <NickName>{nickname}</NickName>
          </BrandAndNickNameContainer>
        </BrandWrapper>
        {!children && (
          <RateWrapper>
            <RateSpan isGrow={isGrow}>{variationRate}%</RateSpan>
            {isGrow ? <ArrowStockUp /> : <ArrowStockDown />}
          </RateWrapper>
        )}
      </CardHeader>
      <ChildrenContainer>
        {!children ? (
          <Fragment>
            <VictoryChart
              containerComponent={
                <VictoryVoronoiContainer
                  labels={d => `Prix: ${d.datum._y}€\nDate: ${d.datum.xName}`}
                />
              }
            >
              <VictoryAxis dependentAxis />
              <VictoryGroup
                color={colors.green[100]}
                labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
              >
                <VictoryArea
                  data={transformData(watchData)}
                  style={{
                    labels: {
                      fill: colors.red,
                      fontSize: 20
                    }
                  }}
                />
              </VictoryGroup>
            </VictoryChart>
          </Fragment>
        ) : (
          children
        )}
      </ChildrenContainer>
    </Layout>
  );
};

export default StockCard;
