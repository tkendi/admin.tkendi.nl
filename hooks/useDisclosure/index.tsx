import { useCallback, useState } from "react";

/**
 * @author tkendi
 *
 * @description 단순히 Open, Close 또는 Toggle 할 경우에 사용하는 hook입니다
 *
 * @copyright by tkendi.nl
 *
 */

const useDisclosure = () => {
  const [disclosure, setDisclosure] = useState(false);

  /**
   *
   * @description
   * disclosure를 !disClosure 합니다
   * handleDisclosure() => void
   */

  const handleDisclosure = useCallback(() => {
    setDisclosure(v => !v);
  }, []);

  /**
   *
   * @description
   * disclosure를 true 합니다
   * handleOnDisclosure() => void
   */

  const handleOnDisclosure = useCallback(() => {
    setDisclosure(true);
  }, []);

  /**
   *
   * @description
   * disclosure를 false 합니다
   * handleOffDisclosure() => void
   */

  const handleOffDisclosure = useCallback(() => {
    setDisclosure(false);
  }, []);

  return {
    disclosure,
    handleDisclosure,
    handleOnDisclosure,
    handleOffDisclosure,
  };
};

export default useDisclosure;
