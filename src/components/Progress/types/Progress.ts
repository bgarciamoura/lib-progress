export interface ProgressProps {
  /**
   * @description       Progress bar color
   * @default           primary
   * @property
   * @propertyOf        Progress
   *
   * @type              'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
   * @example           <Progress color="primary" />
   * @example           <Progress color="secondary" />
   * @example           <Progress color="success" />
   *
   * @example           <Progress color="danger" />
   * @example           <Progress color="warning" />
   * @example           <Progress color="info" />
   * @example           <Progress color="light" />
   * @example           <Progress color="dark" />
   *
   */

  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

  /**
   * @description       Progress bar value
   * @default           0
   * @property
   * @propertyOf        Progress
   *
   * @type              number
   * @example           <Progress value={50} />
   */

  value?: number;

  /**
   * @description       Progress bar max value
   * @default           100
   * @property
   * @propertyOf        Progress
   *
   * @type              number
   * @example           <Progress max={100} />
   */

  max?: number;

  /**
   * @description       Progress bar striped
   * @default           false
   * @property
   * @propertyOf        Progress
   *
   * @type              boolean
   * @example           <Progress striped />
   * @example           <Progress striped={true} />
   */

  striped?: boolean;

  /**
   * @description       Progress bar animated
   * @default           false
   * @property
   * @propertyOf        Progress
   *
   * @type              boolean
   * @example           <Progress animated />
   * @example           <Progress animated={true} />
   *
   * @note              animated property will be ignored if striped property is false
   *
   */

  animated?: boolean;
}
