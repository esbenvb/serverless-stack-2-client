const dev = {
  STRIPE_KEY: 'pk_test_pNjeXeVSXDa1YG5weJJ4dHBg',
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1xetwvufd3eaj"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://0kifx0qhpi.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_zK1VLAg3i",
    APP_CLIENT_ID: "1p1bpit4n8ro8nbp585vc1ddog",
    IDENTITY_POOL_ID: "us-east-1:ac2de673-b120-41a4-b718-d2df733f67f3"
  }
}

const prod = {
  STRIPE_KEY: 'pk_test_pNjeXeVSXDa1YG5weJJ4dHBg',
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-jvimjs0zqgij"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://lyhc81tjnj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_0Vnq8Af1v",
    APP_CLIENT_ID: "47g24bpfl2839e5qjqlmvbdq8f",
    IDENTITY_POOL_ID: "us-east-1:3f146c44-da9e-4f05-8b8b-bb8a35a0ed36"
  }
}

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
}
