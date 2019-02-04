using AWSAuth
using Documenter
using HTTP

makedocs(modules=[AWSAuth],
         sitename="AWSAuth.jl",
         authors="The JuliaCloud Developers",
         pages=["index.md"])

deploydocs(repo="github.com/JuliaCloud/AWSAuth.jl.git", target="build")
