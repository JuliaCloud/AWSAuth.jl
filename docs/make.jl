using AWSAuth
using Documenter
using HTTP

makedocs(modules=[AWSAuth],
         sitename="AWSAuth.jl",
         authors="The JuliaWeb Developers",
         pages=["index.md"])

deploydocs(repo="github.com/JuliaWeb/AWSAuth.jl.git", target="build")
