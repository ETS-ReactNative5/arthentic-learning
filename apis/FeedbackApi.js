import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const getFeedbackGET = Constants =>
  fetch(
    `https://api.webflow.com/collections/62259bb3bd99b998456a17aa/items?live=true`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['Webflow_token'],
        'Content-Type': 'application/json',
        'accept-version': Constants['Accept_Version'],
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useGetFeedbackGET = (args, { refetchInterval }) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['feedback', args], () => getFeedbackGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['feedbacks']),
  });
};

export const FetchGetFeedbackGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetFeedbackGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetFeedback: refetch });
};

export const testPostPOST = (Constants, { feedback, name }) =>
  fetch(`https://api.webflow.com/collections/62259bb3bd99b998456a17aa/items`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['Webflow_token'],
      'Content-Type': 'application/json',
      'accept-version': Constants['Accept_Version'],
    },
    body: JSON.stringify({
      fields: {
        name: name,
        feedback: feedback,
        _archived: false,
        _draft: false,
      },
    }),
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useTestPostPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => testPostPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('feedback', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('feedback');
      },
    }
  );
};
