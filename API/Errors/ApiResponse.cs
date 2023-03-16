

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message=null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageStatusCode(statusCode);
        }

       

        public int StatusCode { get; set; }
        public string  Message { get; set; }

         private string GetDefaultMessageStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400=>"A bad request,You have made",
                401=>"Authorized you are not",
                404=>"Resource found,it was not",
                500=>"Errors leads to dark side",
                _=>null
            };
        }
        
    }
}